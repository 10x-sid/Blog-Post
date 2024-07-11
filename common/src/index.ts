import z from  "zod"
//this is varible which wil used to parse the input in backend therefore stict and detailed
export const signupSchema= z.object({
    email:z.string().email(),
    password:z.string().min(6),
    name:z.string().optional()
})

export const signinSchema= z.object({
    email:z.string().email(),
    password:z.string().min(6),
    
})

export const blogSchema= z.object({
    title:z.string(),
    content:z.string().min(10),
    published:z.boolean().optional()
})


export const UpdateblogSchema= z.object({
    id:z.string(),
    title:z.string(),
    content:z.string().min(10),

})

//types of them is useful while coding as it  will help in frontend to send correct type while calling the backend endpoint
export type signupTypes = z.infer<typeof signupSchema>
export type signinTypes = z.infer<typeof signinSchema>
export type blogTypes = z.infer<typeof blogSchema>
export type updateBlogTypes = z.infer<typeof UpdateblogSchema>

