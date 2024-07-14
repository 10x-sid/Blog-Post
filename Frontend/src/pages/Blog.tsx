import { useParams } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { useblog } from "../hooks/get"
import { Post } from "../components/Post"
import { Blogskeleton } from "../components/Skeleton"


export default function Blog(){
    const{id}=useParams()
    const {loading,blog}=useblog({id:id ||""}) //we can send dirctlu id but to avoid type error
    if(!loading){
        return(
            <div>
                <Navbar/>
                <Blogskeleton/>
            </div>
        )

    }
    return(
        <div>
            <Navbar/>
            
            <Post title={blog.title} publishDate={blog.date} content={blog.content} authorName={blog.author.name}/>

            
        
        </div>
    )
}