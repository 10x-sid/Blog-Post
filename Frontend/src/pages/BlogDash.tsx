import { Link } from "react-router-dom";
import { BlogCard } from "../components/BlogCard";
import { Navbar } from "../components/Navbar";
import { useDash } from "../hooks/get";
import { Skeleton } from "../components/Skeleton";

export interface blogProp{
    id:string,
    title:string,
    content:string,
    author:{
        name:string
    },
    date:string


}

export default function Dashboard(){
    const {loading,blogs}=useDash()
    return(
        <div>
           <div className=" "> <Navbar/></div>
            <div className="grid place-content-center">
            <div className=" w-screen max-w-screen-md">
                {loading? <div ><Skeleton/></div>:
                
                blogs.map((blog:blogProp)=>{
                    return <Link to={`/blog/${blog.id}`}> <BlogCard title={blog.title} content={blog.content} authorName={blog.author.name} publishDate={blog.date}/> </Link>
                })}
                
            </div>
        </div>
        </div>
    )
}


