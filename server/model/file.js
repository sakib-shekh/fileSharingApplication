import mongoose, { Schema } from "mongoose";

const fileSchema=new mongoose.Schema({
        path:{
            type:String,
            require:true
        },
        name:{
            type:String,
            require:true
        },
        DownloadCount:{
            type:Number,
            default:0
        }

})
const File=mongoose.model('files',fileSchema);
export default File;