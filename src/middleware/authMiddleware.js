import { config } from "dotenv";
config();

const {JWT_SECRET} = process.env;


export const authMiddleware = (req, res, next) =>{

    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({message: "Invalid token"})
    }
    const token = authHeader.split(" ")[1]



    try{


    }catch(err){

    }

};