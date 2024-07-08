import { Hono } from "hono"


const signup= new Hono()
signup.post('/',(c)=>{
    return c.text("hi from")
})

export default signup