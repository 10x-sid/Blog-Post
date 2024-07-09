import { Hono } from "hono";
import { verify,decode } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

interface Env{
    Bindings:{
        DATABASE_URL:string,
        JWT_sec:string
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

            c.set('jwtPayload',response.id)
            console.log(response.id);
            
            await next()
        
        }else{
            c.status(401)
            return c.json({
                msg:"invalid credintials"
            })
        }
    }catch(e){
        return c.json({
            msg:"error while verifying"
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