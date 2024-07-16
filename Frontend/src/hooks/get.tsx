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
                if(res.data!=null){
                    setBlog(res.data)
                    setLoading(true)
                    
                }else{
                    throw new Error
                }
                
                
            }catch (e) {
                
                // alert("Blog is removed")
                navigate("/");
                }
            // } finally {
            //     setLoading(false);
            // }

        }
        Res()
    },[id])
    return {
        loading,blog
    }
}


export function useName(){
    const[name,setName]=useState("")
    const [email,setEmail]=useState("")

    useEffect(()=>{
        axios.get(`${URL}/api/v1/blog/name`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }).then((res)=>{
            console.log(res);
            
            setName(res.data.res.name)
            setEmail(res.data.res.email)
        })
    },[])
    console.log(name);
    

    return {
        name,email
    }
}

export function useUser(){
    const [userblog,setUserBlog]=useState()
    useEffect(()=>{
        axios.get(`${URL}/api/v1/blog`)
    })

}

