import { BlogCard } from "../components/BlogCard";
import { Navbar } from "../components/Navbar";
import { useDash } from "../hooks/get";

interface blogProp{
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
            <div className="max-w-2xl">
                {loading? <div>loading</div>:
                
                blogs.map((blog:blogProp)=>{
                    return <BlogCard title={blog.title} content={blog.content} authorName={blog.author.name} publishDate="2nd jan"/>
                })}
                
            </div>
        </div>
        </div>
    )
}


