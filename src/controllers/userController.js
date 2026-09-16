import { registerNewUser, signUserIn,  } from "../services/userServices.js";




export const register = async (req, res) =>{

    try{
    const createUser = await registerNewUser(req.body);
        return res.status(201).json({message: "New User Created successfully", dataCreated: createUser})
        
    } catch(err){
        return res.status(500).json({error: err.message})
    }

}

export const logIn = async(req, res) =>{

    const {user, token} =  await signUserIn(req.body)

    try{
        return res.status(200).json({"message": "log In successfully", user, token})
    }catch(err){
        if (err.message == "Invalid email or password"){
            return res.status(400).json({message: "invalid credentials"})
        } return res.status(500).json({meesage: err.message})
    }
}