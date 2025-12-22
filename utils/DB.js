import mongoose from "mongoose";
const connectdb = async () =>{
try {
    await mongoose.connect(process.env.MONGO_URi)
    console.log("Mongodb connect sucssesfully");
    
} catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);

    
}
}
export default connectdb;