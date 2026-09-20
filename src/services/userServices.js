import { hashpassword, compareHashedPassword } from "../utils/passwordUtils.js";

import { findAllUSers,
     findByUserEmail,
    createUser,
deleteUSerAccount,
findByUserName,findUserByID, updateUSerInfo
 } from "../repositories/userRepositories.js";


 const sanitizeDataForUser = (user) =>{
   
    return {
        id : user.id,
        uuid: user.uuid,
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        createdAt: user.createdAt
    };

 };

export const registerNewUserIntoDB = async (email, firstname, lastname, username, password) =>{

    const isEmailExist = await findByUserEmail(email)

    const isUsernameExist = await findByUserName(username)

    if (isEmailExist) {
        throw new Error("Email already Exist... use different email");
    }

    if (isUsernameExist){
        throw new Error("Username already exist ... use different name")
    };

    const hashedpassword = await hashpassword(password)

    const newUserCreated = await createUser({firstname, lastname, email,username, password:hashedpassword})

    return sanitizeDataForUser(newUserCreated)
 };



//  login logic