import {z} from "zod"
const username= z
    .string()
    .min(2,"User name too short!")
    .max(15,"User name too long!")
    .regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special characters.")

export const signUpSchema=z.object({
    username:username,
    email:z.string().email({message:"Invalid email address!"}),
    password:z.string().min(8,"Password must be more than 8 characters")
})