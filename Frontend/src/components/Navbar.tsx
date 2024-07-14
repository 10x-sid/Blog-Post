import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Navbar=()=>{
    return(
        <div className=" flex justify-between m-5 p-2 border-b ">
            <Link to="/">
                <div className="flex flex-col justify-center text-black font-extrabold">
                    BLOG-POST
                </div>
            </Link>
           
            <Avatar title="Harikirat" size="big"></Avatar>
            
        
        </div>
    )
}