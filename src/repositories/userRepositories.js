// find user, email, id, create
import User from "../models/userModel.js";



// username

export const findUserByUserName = async (username) =>{

    return await User.findOne({where: {username: username}})
};


export const findUserByEmail = async (email) =>{
    return await User.findOne({where: {email: email}});
};

export const findUserById = async (id) =>{
    return await User.findByPk(id)
}



// create new user


export const createNewUser =async (data) =>{

    return await User.create(data)
}