import { isTokenBlackLised } from "../services/token.service.js";
import jwt from "jsonwebtoken"
import { config } from "dotenv";
config();

const {JWT_SECRET} = process.env;


export const authMiddleware = (req, res, next) =>{

    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({message: "Invalid token"})
    }
    const token = authHeader.split(" ")[1]

    if (isTokenBlackLised(token)){
        return res.status(401).json({message: "user loggedout"})
    }

    try{
        const decoded = jwt.verify(token,JWT_SECRET);
        req.user = decoded;
        req.token = token;
        next()

    }catch(err){

        return res.status(500).json({message: err.message })

    }

};