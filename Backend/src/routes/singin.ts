import { Hono } from "hono"


const signin= new Hono()
signin.post('/',(c)=>{
    return c.text("hi from singin")
})

export default signin