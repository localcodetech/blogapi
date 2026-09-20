import z from "zod";

// z => zod



export const registerSchema = z.object({
    firstname: z.string().trim().toLowerCase(),
    lastname: z.string().trim().toLowerCase().min(3),
    username: z.string().trim().toLowerCase().min(3),
    email : z.email().trim().toLowerCase(),
    password: z.string().trim().min(4)
});




export  const loginSchema = z.object({
     email : z.email().trim().toLowerCase(),
    password: z.string().trim().min(4)
});
