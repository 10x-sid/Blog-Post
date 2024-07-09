import { Hono } from "hono"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'




const signup= new Hono<{
    Bindings:{
        DATABASE_URL:string  //u have to give bingdings as a genric to ur routes
    }
}>()
signup.post('/',(c)=>{
    const prisma = new PrismaClient({datasourceUrl:c.env.DATABASE_URL}).$extends(withAccelerate())
    
    return c.text("hi from")
})

export default signup