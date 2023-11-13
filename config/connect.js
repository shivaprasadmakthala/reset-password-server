const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Mongodb database Connected! ${conn.connection.host}`);
    } catch(error){
        console.log(`error: ${error.message}`);
    }
};

module.exports = connectDB;