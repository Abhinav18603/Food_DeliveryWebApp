import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://abhinavkrsingh12:fnk5PDv7Htvra6Vp@clusteruse.3end3q3.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


