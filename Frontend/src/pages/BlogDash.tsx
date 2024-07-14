import { Link } from "react-router-dom";
import { BlogCard } from "../components/BlogCard";
import { Navbar } from "../components/Navbar";
import { useDash } from "../hooks/get";
import Skeleton from "../components/Skeleton";

interface blogProp{
    id:string,
    title:string,
    content:string,
    author:{
        name:string
    }


}

export default function Dashboard(){
    const {loading,blogs}=useDash()
    return(
        <div>
            <Navbar/>
            <div className="grid place-content-center">
            <div className=" w-screen max-w-screen-lg">
                {loading? <div ><Skeleton/></div>:
                
                blogs.map((blog:blogProp)=>{
                    return <Link to={`/blog/${blog.id}`}> <BlogCard title={blog.title} content={blog.content} authorName={blog.author.name} publishDate="2nd jan"/> </Link>
                })}
                
            </div>
        </div>
        </div>
    )
}


