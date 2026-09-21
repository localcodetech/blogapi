// src/middleware/authmiddleware.js
import { isTokenblackListed} from "../utils/tokenBlacklist.js";
import { verifyToken } from "../utils/token.js";

export const userAuthMiddleware = async(req, res, next) =>{

    const authHeader = req.headers["authorization"];

    if (!authHeader || !(authHeader.startsWith("Bearer")) ) {
        return res.status(401).json({message: "Unauthorized "})
    }

    const token = authHeader.split(" ")[1];

    const isBlackListed = await isTokenblackListed(token)

    if (isBlackListed) return res.status(401).json({message: "unauthorized"})

        try{
            const decoded = verifyToken(token)
            req.user = decoded 
            next()
        }
        catch (error) {
            res.status(401).json({message: error.message})
        }

}