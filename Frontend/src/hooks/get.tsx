import axios from "axios";
import {  useCallback, useEffect, useRef, useState } from "react";
import { URL } from "../Config";
import { useNavigate } from "react-router-dom";
import { blogProp } from "../pages/BlogDash";

export function useDash({page}:{page:number}){
    const [loading,setLoading]=useState(true)
    const[blogs,setBlogs]=useState<blogProp[]>([])
    const prevPage= useRef(0)
  
    
    const navigate=useNavigate()

    useEffect(()=>{
        async function Res() {
          if(prevPage.current==page) return;
          try{ 
            const res= await  axios.get(`${URL}/api/v1/blog/bulk?page=${page}`)
            
            if(typeof(res.data)=="string"){
              return
            }
           
           prevPage.current=page
           setBlogs(Prev=>[...Prev ,...res.data])
           setLoading(false)
        }catch(e){
            
            setLoading(true)
            navigate("/signin")
        }
            
        }
        Res()
    },[page])

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
                navigate("/signin");
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



 // replace with your actual base URL

export function useName() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
//   const navigate = useNavigate();

  useEffect(() => {
    const fetchNameAndEmail = async () => {
      try {
        const response = await axios.get(`${URL}/api/v1/blog/name`, {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        });
        // console.log("hii");
        // console.log(response.data.msg);
        setName(response.data.res.name);
          setEmail(response.data.res.email);
      } catch (error) {
        setName("Aynonimus")
        // console.log(error);
        // navigate("/signin");
      }
    };

    fetchNameAndEmail();
  }, []);

  return { name, email };
}


// replace with your actual base URL

export function useLoggedIn() {
  const navigate = useNavigate();

  const checkLoggedin = useCallback(async() => {
    
        try{
            await axios.get(`${URL}/api/v1/blog/890372908dfd`, {
                headers: {
                  Authorization: localStorage.getItem("token"),
                },
              });
        }catch(e){
            navigate("/signin")
        }
    
    
  },[navigate])
  return checkLoggedin
  
}

interface userBlog{
  title:string,
  id:string
}

export function useUserBlog(){
  const[content,setContent]=useState<userBlog[]>([])

  useEffect(()=>{
    axios.get(`${URL}/api/v1/blog/user/blog`,{
      headers:{
        Authorization:localStorage.getItem("token")
      }
    }).then((res)=>{
      setContent(res.data)
    })
  },[])

  return content
}

