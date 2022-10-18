import mongoose from "mongoose";



export const Connection = async() =>{
    try{
        // if(mongoose.connections[0]){
        //     return;
        // }
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@miiramadhyam.u2ock.mongodb.net/BookStore?retryWrites=true&w=majority`,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log('database connected'); 
    }catch(err){
        console.log(err.message);
    }
}