import z from "zod";



export const userRegisterSchema = z.object({
    firstName : z.string().trim().min(1),
    lastName: z.string().trim().min(1),
    username : z.string().trim().min(1),
    email: z.email().trim(),
    password: z.string().trim()
});



export const userLogInSchema = z.object({
    email: z.email().trim(),
    password: z.string().trim()
})