import {z} from "zod"

export const messageSchema=z.object({
    content:z.string()
    .min(10,{message:"Message must be atleat 10 characters"})
    .max(300,{message:"Message can be no longer than 300 characters"})
})