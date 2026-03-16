import mongoose from "mongoose";

const songSchema = new mongoose.Schema(
    {
        title:{
            type : String,
            required :true
        },
        artist :{
            type:String,
            required : true
        },
        album :{
            type:String,
            default: ""
        },
        audioUrl:{
            type:String,
            default:""
        },
        coverImage:{
            type:String,
            default:""
        },
        duration:{
            type:Number,
            default:0
        },
        plays:{
            type:Number,
            default:0
        },


    },
    {timestamps:true}
)
export default mongoose.model("song", songSchema)