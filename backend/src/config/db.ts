import mongoose from "mongoose";

const connectDB = async () => {
    if(process.env.MONGO_URI && process.env.MONGO_URI.trim() != ''){
        try {
            const conn = await mongoose.connect(process.env.MONGO_URI);
            console.log(`MongoDB Connected: ${conn.connection.host}`)
        } catch (error) {
            console.log(error);
            process.exit(1);
        }
    }else{
        console.log("Undefined MONGODB URI");
        process.exit(1);
    }
}

export default connectDB;