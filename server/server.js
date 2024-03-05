const mongoose = require("mongoose");
require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());

const MONGO_URI = process.env.MONGOOSE_URI

mongoose.connect(MONGO_URI, { dbName: "usersData" }).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
})

    

// app.get("/history", (req, res) => {
//     try {
//         if (!spaceHistory) {
//             throw new Error("No history found.");
//         }
//     res.send(spaceHistory.history);
//     } catch (error) {
//         console.error("Error : ",error.message);
//         res.status(500).send("Internal Server Error");
//     }
// });

app.listen(5000, () => {
    console.log("🚀 server running on port 5000");
});