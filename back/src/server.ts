import express from "express"; 
import cors from "cors";
import morgan from "morgan";
import router from "./routes/router";
import indexRouter from "./routes/indexRouter";

const app = express()

app.use(cors())
app.use(express.json());
app.use(morgan("dev"));
app.use(router);

app.use(indexRouter);

app.get("/", (req, res) => res.send ("Hola Mundo!!!"));

export default app; 

