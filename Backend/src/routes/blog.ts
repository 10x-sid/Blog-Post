import { Hono } from "hono";
const blog = new Hono()

blog.get('/',(c)=>{
    return c.text("hi from blog!!")
})
blog.post('/')
blog.put('/')

export default blog