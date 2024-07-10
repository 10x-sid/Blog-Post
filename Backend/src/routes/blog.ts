import { Hono } from "hono";
import { verify,decode } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

interface Env{
    Bindings:{
        DATABASE_URL:string,
        JWT_sec:string
        
    },
    Variables:{
        id:string
    }

    
}
const blog = new Hono<Env>()

//middleware
blog.use("/*",async(c,next)=>{
    try{
        const header = await c.req.header("authorization")||""
        const token= header.split(" ")[1]
        const response = await verify(token,c.env.JWT_sec)
        if(response.id){

            c.set('id',response.id)
            console.log(response.id);
            
            await next()
        
        }
    }catch(e){
        c.status(401)
        return c.json({
            msg:"invalid credintials!!"
        })
    }

})

blog.get('/:id',(c)=>{
    return c.text("hi from blog!!")
})
blog.post('/',(c)=>{
    return c.text("hi form blog")

})
blog.put('/')

export default blog