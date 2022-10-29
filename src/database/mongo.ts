import mongoose from "mongoose";

export const connectDB = async(): Promise <void> => {
    await mongoose.connect("mongodb://AzureDiamond:hunter2@172.24.0.2:27017/?authSource=admin", 
    () => console.log("Connected to Database"))     
}