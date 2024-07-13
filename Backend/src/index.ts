import { Hono } from 'hono'
import signup from "./routes/signup"
import signin from './routes/singin'
import blog from './routes/blog'
import { cors } from 'hono/cors'




const app = new Hono()

app.use('/*',cors())


app.route('/api/v1/signup',signup)
app.route('/api/v1/signin',signin)
app.route('/api/v1/blog',blog)

 
export default app
