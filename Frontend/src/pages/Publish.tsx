import axios from "axios"
import {  useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { URL } from "../Config"
import { blogTypes } from "@shekharsid/blog-post"
import { useLoggedIn } from "../hooks/get"
// import { useName } from "../hooks/get"



export default function Publish(){
    // const checkLoggedIn=useLoggedIn()
    const chekLoggedin=useLoggedIn()
    chekLoggedin()
    
    const navigate=useNavigate()
    // const {name}=useName()
    
    const [input,setInput]=useState<blogTypes>({
        title:"",
        content:""
    })
    async function publish(){
        if(!(input.title&&input.content)){
            alert("can't publish empty")
            return
        }
       try { const res = await axios.post(`${URL}/api/v1/blog`,input,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })

        alert(res.data.msg)
        setInput({
            title:"",
            content:""
        })
        navigate("/")
    }catch(e){
        alert("eror while creating blog")
    }

        
    }
    return(
        <div className=" ">
            <div className="flex flex-col-2 justify-center lg:justify-between mt-3 p-2 border-b">
                 <Link to="/">
                <div className="flex flex-col justify-center invisible lg:visible items-center pt-2 text-black font-extrabold">
                    BLOG-POST
                </div>
                </Link>
                
                    <button className="bg-green-700 hover:bg-green-800 flex flex-col justify-center items-center rounded-full h-3 w-6 px-10 py-5" onClick={publish}>Publish</button>
                
            </div>
            <div className="flex flex-col justify-center items-center max-w-screen-lg w-full lg:mx-[200px] mt-4 lg:mt-10 shadow-md border-1 bg-slate-400 rounded-full">
                 <input className="h-10 lg:text-2xl text-lg  text-thin rounded-sm px-3  font-medium lg:font-bold w-full bg-slate-50  " value={input.title} placeholder="Title" onChange={(e)=>{
                    setInput((c)=>(
                        {
                            ...c,
                            title:e.target.value

                        }
                    ))
                 }}/>
                
                <textarea className="h-screen  text-sm lg:text-lg bg-slate-50 rounded-lg px-3 mt-2 w-full" value={input.content} onChange={(e)=>{
                    setInput((c)=>(
                        {
                            ...c,
                            content:e.target.value
                        }
                    ))
                }}></textarea>
                
                

            </div>

        </div>
    )
}