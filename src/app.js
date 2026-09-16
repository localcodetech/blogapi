import express from "express";
import cors from "cors";
import router from "./routes/userRoutes.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use("/api/auth", router)


export default app;





