const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected:", conn.connection.host,conn.connection.name);
        
    } catch (err) {
        console.log("MongoDB connection failed:", err);
        process.exit(1);
    }
}

module.exports = connectDb;