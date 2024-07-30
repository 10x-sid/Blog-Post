import { Hono } from "hono"
import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"
import { sign } from "hono/jwt"  //don't need to import the jsonwebtoken lib to perform this task!! it it inbluid
import { signinSchema } from "@shekharsid/blog-post"
import bcrypt, { hash } from "bcryptjs";

const signin= new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_sec:string
    }
}>()
signin.post('/',async(c)=>{
    try{
        const prisma = new PrismaClient({datasourceUrl:c.env.DATABASE_URL}).$extends(withAccelerate())
        const body = await c.req.json()
        const { success }= signinSchema.safeParse(body)
        if(!success){
            return c.text("invalid inputs!!")
        }
       
        const user = await prisma.user.findUnique({
            where:{
                email:body.email
            }
        })
        console.log(user);
        const isMatch = await bcrypt.compare(body.password,(user?.password || ""))
        console.log(isMatch);
        

        if(user && isMatch){
            const token = await sign({id:user.id},c.env.JWT_sec)
            return c.json({
                jwt:token
            })
        }else{
            throw new Error
        }
        

       
    }catch(e){
        return c.json({
            msg:"invalid creds"
        })
    }



    
})

export default signin