import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
    },
    imageUrl:{
        type:String,
    },
    featured:{
        type:Boolean,
    }
})

export default mongoose.models.Book || mongoose.model("Book",bookSchema);