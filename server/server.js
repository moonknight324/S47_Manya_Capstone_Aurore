const spaceHistory = require("./historyData.json")
const express = require("express");
const app = express();
app.get("/history", (req, res) => {
    try {
        if (!spaceHistory) {
            throw new Error("No history found.");
        }
    res.send(spaceHistory.history);
    } catch (error) {
        console.error("Error : ",error.message);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(5000, () => {
    console.log("🚀 server running on port 5000");
});