import { Link, useNavigate } from "react-router-dom";
import { useName ,useLoggedIn } from "../hooks/get";

export default function Profile(){
    const navigate = useNavigate()
    
    const checkLoggedin= useLoggedIn()
    checkLoggedin()
    return(
        <div>
            <div className="top-0 border-b flex p-4 justify-between">
                <Link to="/">
                     <div className="flex flex-col justify-center items-center pt-2 text-black font-extrabold">
                        BLOG-POST
                        </div>
                </Link>
                <button onClick={()=>{
                    localStorage.removeItem("token")
                    navigate("/signin")
                }}   className="rounded-full px-4 py-2 flex justify-center bg-green-700 hover:bg-green-800">
                    Logout
                </button>
                

            </div>
            <div>
                    <div>
                        <Avatar/>
                    </div>
            </div>
        
        </div>
    )
}


function Avatar(){
    
    const {name,email}=useName()
    
    return(
        <div className="flex justify-start">
            <div className="rounded-full w-12 h-12 flex justify-center pt-2  m-4 text-2xl font-bold bg-slate-700 text-black ">{name.slice(0,1).toUpperCase()}</div>
            <div>
                <div className="text-3xl px-8 mt-4 underline">{name.toUpperCase()}</div>
                <div className="mt-2 text-lg">{email}</div>
            </div>
            
        </div>
    )
}