

export const validateRequest = (schema) => async(req, res, next) =>{

    const result = await schema.safeParse(req.body)

    if (!result.success){
         return res.status().json({error: result.error.message})
    };
    req.body = result.data

    next();
   
}