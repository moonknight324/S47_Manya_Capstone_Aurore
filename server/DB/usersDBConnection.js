const mongoose = require("mongoose");

const DB =process.env.MONGOOSE_URI;

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>console.log("Database connected")).catch((err)=>console.log("Error : ",err))