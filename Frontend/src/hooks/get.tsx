import axios from "axios";
import { useEffect, useState } from "react";
import { URL } from "../Config";
import { useNavigate } from "react-router-dom";
import { blogProp } from "../pages/BlogDash";

export function useDash(){
    const [loading,setLoading]=useState(true)
    const[blogs,setBlogs]=useState([])
    const navigate=useNavigate()

    useEffect(()=>{
        async function Res() {
          try{ 
            const res= await  axios.get(`${URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
           })
           
           
           setBlogs(res.data)
           setLoading(false)
        }catch(e){
            navigate("/signin")
        }
            
        }
        Res()
    },[])

    return{
        loading,
        blogs
    }
}

export function useblog({id}:{id:string}){
    const navigate= useNavigate()
    const [loading,setLoading]=useState(false)
    const [blog,setBlog]=useState<blogProp>({
        
        id:"",
        title:"",
        content:"",
        author:{
            name:""
        },
        date:""
        
    })
    useEffect(()=>{
        async function Res(){
            try{
                const res = await axios.get(`${URL}/api/v1/blog/${id}`,{
                    headers:{
                        Authorization:localStorage.getItem("token")
                    }
                })
    
                setBlog(res.data)
                setLoading(true)
            }catch(e){
                navigate("/")
            }

        }
        Res()
    },[])
    return {
        loading,blog
    }
}