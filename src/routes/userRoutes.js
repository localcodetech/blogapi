import { register, logIn, logOut } from "../controllers/userController.js";
import {Router} from "express";
import { userRegisterSchema, userLogInSchema } from "../schemas/userSchema.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { validateRequest } from "../middleware/userValidation.js";



const router = Router();

// test if root is okay 
router.get("/", (_, res)=>{res.send("ok")})


// router.METHOD(PATH, middleware, handler)
router.post("/register",validateRequest(userRegisterSchema), register )

router.post("/login", validateRequest(userLogInSchema), logIn)

router.post('/logout', authMiddleware, logOut)



export default router