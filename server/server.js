const spaceHistory = require("./historyData.json")
const express = require("express");
const app = express();
app.get("/history", (req, res) => {
    res.send(spaceHistory.history);
});

app.listen(5000, () => {
    console.log("🚀 server running on port 5000");
});