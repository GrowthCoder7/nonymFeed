import mongoose from "mongoose";

type connectObject={
    isConnected?:number
}

const connection:connectObject={}

async function dbConnect():Promise<void>{
    if(connection.isConnected){
        console.log("Already connected to the database!");
        return
    }

    try {
        const db=await mongoose.connect(process.env.MONGO_URI||"")
        connection.isConnected=db.connections[0].readyState
        console.log("Connected Successfully!");
    
    } catch (error) {
        console.log("Failed to connect to the database",error);   
        process.exit(1)
    }
}

export default dbConnect;