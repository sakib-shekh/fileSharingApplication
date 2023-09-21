
import mongoose from "mongoose";
const DbConnection=async()=>{

    
    try{
       await mongoose.connect(process.env.MONGO_URI)
       await console.log("database connected successfully");
    }
    catch(error)
    {
        console.log(error,"error while connecting database");
    }
}
export default DbConnection;