const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected");
    }catch(err){
        res.status(500).send("internal server error");
    }
}
module.exports = connectDB;