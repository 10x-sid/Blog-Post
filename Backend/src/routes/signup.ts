import { Hono } from "hono"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { signupSchema } from "@shekharsid/blog-post"
import bcrypt from "bcryptjs";


const signup= new Hono<{
    Bindings:{
        DATABASE_URL:string 
         //u have to give bingdings as a genric to ur routes
    }
}>()


signup.post('/',async(c)=>{

    try{
        const prisma = new PrismaClient({datasourceUrl:c.env.DATABASE_URL}).$extends(withAccelerate())
        const body = await c.req.json()
        const { success }= signupSchema.safeParse(body)
        if(!success){
            return c.text("invalid inputs")
        }
        // console.log(body.password);
        
        const hashPass= await bcrypt.hash(body.password,10)
        // console.log(hashPass);
        

        await prisma.user.create({
            data:{
              email:body.email,
              password:hashPass,
              name:body.name
            }
      
          })

        return c.text("user created successfully")
    }catch(e){
        return c.json({
            msg:"put unique email"
        })
    }
})


export default signup