const mongoose = require("mongoose");

const MONGOOSE_URI = process.env.MONGOOSE_URI;

const connectToDB = async () => {
    try {
        const connect = await mongoose.connect(MONGOOSE_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("Connected to MongoDB");
    }catch(err){
        console.log("Error : ",err)
    }
}

module.exports = connectToDB