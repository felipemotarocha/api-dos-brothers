import bodyParser from "body-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import mongoose from "mongoose";

const app = express();
app.use(cors())
app.use(bodyParser.json())

const database = async (): Promise<void> => {
    await mongoose.connect("mongodb://AzureDiamond:hunter2@172.24.0.2:27017/?authSource=admin")
    .then(() => console.log("Connected to DB"))
    
}
database().catch((e) => console.log(e));

const PORT = process.env.PORT ?? 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world")
})

app.listen(PORT, () => console.log(`Server is running at port http://localhost:${PORT}/`))