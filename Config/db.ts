import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const url = process.env.URL!

const dbConfig = async ()=>{
    try {
        await mongoose.connect(url).then((res)=>{
            console.log("Connected");
            
        })
    } catch (error) {
        console.log(error);
        
    }
}

export default dbConfig