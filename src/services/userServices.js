import { config } from "dotenv";
import jwt from "jsonwebtoken"
config();
import { createNewUser, findUserByEmail, findUserByUserName } from "../repositories/userRepositories.js";
import {passwordEncrption, comparePassword} from "../utils/hashPassword.js";

const sanitise = (user)=>{
    return {
        id: user.id,
        uuid: user.uuid,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        createdAt: user.createdAt
    }
}


export const registerNewUser = async ({email, password, username, firstName, lastName})=>{


    const isEmailExist = await findUserByEmail(email);
    const isUserNameExist = await findUserByUserName(username);

    if (isEmailExist){
        throw new Error ("sorry Email Entered already exist use different Email");
    };

    if (isUserNameExist) {
        throw new Error("Sorry UserName Already Exist, use different username please!")
    }

    const hashPassword = await passwordEncrption(password)


    const newUser = await createNewUser({firstName, lastName, email, username, password:hashPassword})


    return sanitise(newUser)


}


export const signUserIn = async ({email,password})=>{

    // load the secret from env
    const {JWT_SECRET} = process.env;
    const user = await findUserByEmail(email);

    if (!user){
        throw new Error("Email not found")
    }

    if (!email || !(comparePassword(password, user.password))){
            throw new Error("invalid email or password")

    }

    const token = jwt.sign(
        {id: user.id,
            uuid: user.uuid,
            username: user.username,
            email: user.email
        },
        JWT_SECRET,
        {expiresIn: "1d"}
    );

    return {user: sanitise(user), token}
};


