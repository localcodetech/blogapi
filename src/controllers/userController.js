

import { registerNewUserIntoDB } from "../services/userServices.js";



export const userRegisterController = (req, res) =>{


    try{
    
        const newUser = registerNewUserIntoDB(req.body)
        res.status(201).json({message: "UserData Created successfully", data: newUser})

    }
    catch(err){
        res.status(500).json({error: err.message})

    }


}