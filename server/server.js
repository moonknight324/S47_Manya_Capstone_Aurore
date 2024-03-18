require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectToDB = require("./DB/connect");
connectToDB();
const PORT = process.env.PORT || 5000;
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const userdb = require("./Schemas/userGoogleSchema");
const historyRoutes = require("./Routes/historyRoutes")

const clientId = process.env.CLIENTID;
const clientsecret = process.env.CLIENTSECRET;

//Routes
app.use("/history",historyRoutes)

app.get("/", (req, res) => {
  res.send("Hello there, Welcome to Aurore! 🚀✨");
});

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(express.json());


app.use(
  session({
    secret: process.env.SESSIONSECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new OAuth2Strategy(
    {
      clientID: clientId,
      clientSecret: clientsecret,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      // console.log("profile",profile);
      try {
        let user = await userdb.findOne({ googleId: profile.id });

        if (!user) {
          user = new userdb({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            image: profile.photos[0].value,
          });
          await user.save();
        }
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/home",
    failureRedirect: "http://localhost:3000/login",
  })
);

app.get("/login/success", async (req, res) => {
  if (req.user) {
    res.status(200).json({ message: "user login", user: req.user });
  } else {
    res.status(400).json({ message: "Not authorized" });
  }
});

app.get("/logout", (req, res, next) => {
  req.logout(function (error) {
    if (error) {
      return next(error);
    }
    res.redirect("http://localhost:3000");
  });
});

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
