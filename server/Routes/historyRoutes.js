const express = require("express");
const app = express();

const connectToDB = require("../DB/connect");
connectToDB();

const history = require("../Schemas/history.schema");
const router = express.Router();

app.use(express.json());

router.get("/", async (req, res) => {
  try {
    const spaceHistory = await history.findOne();
    if (!spaceHistory) {
      throw new Error("No history found.");
    }
    res.send(spaceHistory.history);
  } catch (error) {
    console.error("Error : ", error.message);
    res.status(500).send("Internal Server Error");
  }   
});

module.exports = router
