import bcrypt from "bcryptjs";



export const passwordEncrption = async (password)=>{
    const SALT_ROUND = 10;

    const hashPassword = await bcrypt.hash(password, SALT_ROUND);

    return hashPassword
};


export const comparePassword = async (password, hashPassword) =>{
        return await bcrypt.compare(password, hashPassword)
}
