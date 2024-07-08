import { Hono } from 'hono'
import signup from "./routes/signup"
import signin from './routes/singin'
import blog from './routes/blog'

const app = new Hono()


app.route('/api/v1/signup',signup)
app.route('/api/v1/signin',signin)
app.route('/api/v1/blog',blog)

 
export default app
