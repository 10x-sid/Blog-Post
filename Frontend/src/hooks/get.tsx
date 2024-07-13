import axios from "axios";
import { useEffect, useState } from "react";
import { URL } from "../Config";
import { useNavigate } from "react-router-dom";

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