import axios from "axios"
import {  useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { URL } from "../Config"


Link
export default function Publish(){
    const navigate=useNavigate()
    const[title,setTitle]=useState("")
    const[desc,setDesc]=useState("")
    async function publish(){
       try { const res = await axios.post(`${URL}/api/v1/blog`,{
            title,
            content:desc
        },{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })

        alert(res.data.msg)
        setDesc("")
        setTitle("")
        navigate("/")
    }catch(e){
        alert("eror while creating blog")
    }

        
    }
    return(
        <div>
            <div className="flex justify-between mt-3 p-2 border-b">
                 <Link to="/">
                <div className="flex flex-col justify-center items-center pt-2 text-black font-extrabold">
                    BLOG-POST
                </div>
                </Link>
                
                    <button className="bg-green-700 hover:bg-green-800 flex flex-col justify-center items-center rounded-full h-3 w-6 px-10 py-5" onClick={publish}>Publish</button>
                
            </div>
            <div className="flex flex-col justify-center max-w-screen-lg w-full mx-[200px] mt-10 shadow-md border-1 bg-slate-400 rounded-full">
                 <input className="h-10 text-2xl text-thin rounded-sm px-3  font-bold w-full bg-slate-50  " value={title} placeholder="Title" onChange={(e)=>{
                    setTitle(e.target.value)
                 }}/>
                
                <textarea className="h-screen text-lg bg-slate-50 rounded-lg px-3 mt-2" value={desc} onChange={(e)=>{
                    setDesc(e.target.value)
                }}></textarea>
                
                

            </div>

        </div>
    )
}