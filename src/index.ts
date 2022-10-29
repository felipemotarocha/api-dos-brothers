import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./database/mongo";
import { routes } from "./routes/routes"


dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(routes)

connectDB().catch(e => console.log(e));

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => console.log(`Server is running at port http://localhost:${PORT}/`));