import { Hono } from "hono";
const blog = new Hono()

blog.get('/:id',(c)=>{
    return c.text("hi from blog!!")
})
blog.post('/')
blog.put('/')

export default blog