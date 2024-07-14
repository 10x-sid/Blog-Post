import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Navbar=()=>{
    return(
        <div className=" flex justify-between m-5 p-2 border-b ">
            <Link to="/">
                <div className="flex flex-col justify-center items-center pt-2 text-black font-extrabold">
                    BLOG-POST
                </div>
            </Link>
           
           <div className="flex flex-col-2 justify-center items-center">
                <Link to="/publish"><button className="bg-green-700 hover:bg-green-800 rounded-full mx-5  flex flex-col justify-center items-center  w-[60px] h-[20px] py-4  px-2"> New</button></Link>
                <Avatar title="Harikirat" size="big"></Avatar>
           </div>
            
        
        </div>
    )
}