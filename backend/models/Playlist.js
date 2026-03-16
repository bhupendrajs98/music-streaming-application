import mongoose from "mongoose";
import Song from "../models/Song.js"

const playlistsSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        Song:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Song"
            }
        ],
        coverImage:{
            type:String,
            default:""
        }
    },
    {timestamps:true}

)
export default mongoose.model("Playlist",playlistsSchema)