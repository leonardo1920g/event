import express from "express";
import cors from "cors";
import { mainRouter } from "./routes";
import morgan from "morgan";


const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use( mainRouter );

export { app }