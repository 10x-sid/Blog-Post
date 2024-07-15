import { Hono } from "hono";
import { verify,decode } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { blogSchema, UpdateblogSchema } from "@shekharsid/blog-post";

interface Env {
    Bindings: {
      DATABASE_URL: string;
      JWT_sec: string;
    };
    // Variables: {
    //   userId: string;
    // }; won't work why??
  }
const blog = new Hono<Env>()

//middleware
blog.use("/*",async(c,next)=>{  //* is for every blog route 
    try{
        const header =  c.req.header("authorization")||""
        const token= header.split(" ")[1]
        const response = await verify(token,c.env.JWT_sec)
        if(response.id){

            c.set('jwtPayload',response.id)
            await next()
        
        }
    }catch(e){
        c.status(401)
        return c.json({
            msg:"invalid credintials!!"
        })
    }

})

blog.get("/name",async(c)=>{
    try{
        const prisma= new PrismaClient({datasourceUrl:c.env.DATABASE_URL}).$extends(withAccelerate())
        const userId= c.get("jwtPayload")
        const res= await prisma.user.findUnique({
            where:{
                id:userId

            },
            select:{
                name:true


            }

        })
        if(res){
            return c.json({res})
        }
        
    }catch(e){
        return c.json({
        name:"Aynonimus"
        })
    }
})

blog.get('/myblog',async(c)=>{ //all the blog of the user 
    const prisma = new PrismaClient({datasourceUrl:c.env.DATABASE_URL}).$extends(withAccelerate())
    const userId = c.get("jwtPayload")
    try{
        const posts= await prisma.post.findMany({
            where:{
                authorId:userId
            },
            select:{
                id:true,
                title:true,
                content:true,
                date:true,
                author:{
                    select:{
                        name:true
                    }
                }


            }
            
        })
        if(posts.length==0){
            return c.text("no blog found")
        }

        return c.json(posts)
    }catch(e){
        return c.text("internal error")
    }
   
})

blog.get('/bulk',async(c)=>{    //all the title for the landing page  and it has to be above :/id cause every time only that will executed!!
   
    const prisma = new PrismaClient({datasourceUrl:c.env.DATABASE_URL}).$extends(withAccelerate())
    try{
        const allBlog= await prisma.post.findMany({
            select:{
                id:true,
                content:true,
                title:true,
                author:{
                    select:{
                        name:true
                    }
                },
                date:true
            }
        })
        c.status(200)
        return c.json(allBlog)
    }catch(e){
        return c.text("eroor file fetching data")
    }
})


blog.get('/:id',async(c)=>{ //blog post for the slected blog
    const prisma = new PrismaClient({datasourceUrl:c.env.DATABASE_URL}).$extends(withAccelerate())
    const id =  c.req.param('id')
    try{
        const post= await prisma.post.findUnique({
            where:{
                id:id
            },
            select:{
                id:true,
                title:true,
                content:true,
                author:{
                    select:{
                        name:true
                    }
                },

                date:true

            }
            
        })

        return c.json(post)
    }catch(e){
        return c.text("error while fecthng blog post")
    }
   
})

//note: learn about pagination and impliment here







blog.post('/',async(c)=>{
    const prisma = new PrismaClient({datasourceUrl:c.env.DATABASE_URL}).$extends(withAccelerate())
    const body= await c.req.json()
    const date= new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()
    const { success }= blogSchema.safeParse(body)
    if(!success){
        return c.text("invalid inputs!!")}
    const userId= c.get("jwtPayload")
    try{
        const blog= await prisma.post.create({
            data:{
                authorId:userId,
                content:body.content,
                title:body.title,
                published:body.published,
                date:date
                
            }
        })
        return c.json({
            blogId:blog.id,
            msg:"blog added succesfully"
        })
    }catch(e){
        return c.json({
            msg:"user dosent exists"
        })
    }
    

})






blog.put('/',async(c)=>{
    const prisma = new PrismaClient({datasourceUrl:c.env.DATABASE_URL}).$extends(withAccelerate())
    const body  = await c.req.json()
    const { success }= UpdateblogSchema.safeParse(body)
    if(!success){
        return c.text("invalid inputs!!")
    }
    try{
        await prisma.post.update({
            where:{
                id:body.id  //i wnat to update the post
            },
            data:{
                content:body.content,
                title:body.title

            }
        })

        return c.text("updated sucessfully")
    }catch(e){
        return c.text("some error while updating!!")
    }


})

export default blog