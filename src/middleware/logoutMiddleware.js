
import jwt from "jsonwebtoken"

export const logOutMiddleware = (req, res, next) =>{
    
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    
    
    if (!token){
        return res.status(401).json({message: "invalid token"})
    };
    
    try{
        
    }
    catch(err){
        
    }
}