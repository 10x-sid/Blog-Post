import { Link, useNavigate } from "react-router-dom"
import Input from "./Input"
import { useState } from "react"
import { signupTypes } from "@shekharsid/blog-post"
import axios from "axios"
import { URL } from "../Config"
// import { Alert, Stack } from "@mui/material"





export const Upinput=()=>{
    // const[suc,setSuc]=useState(false)
    const navigate= useNavigate()
    const [passwordVisible,setVisible]=useState(false)
    const [inputs,setInputs]=useState<signupTypes>({ //pass types of signup inputs as genric to the state varible so  that we change while mainting the types of the varibles
        email:"",
        name:"",
        password:""

    })

    function togglePasswordVisibility(){
        setVisible(!passwordVisible)
    }

    async function SendReq(){
        try{
             await axios.post(`${URL}/api/v1/signup`,inputs)
            
            navigate("/signin")
        }catch(e){
            
        }

    }
    return(
        <div className="w-full">
            
            <div className="h-screen flex flex-col items-center justify-center w-auto ">
                <div className=" flex">
                    <div className="text-black font-bold text-3xl mt-4 mx-2"> Create an account </div>
                </div>
                <div className="text-slate-400 pt-1 font-semibold ">
                    Already have an account ? <Link className="underline" to="/signin">Login</Link>
                </div>
                <div>
                        <Input title="Name" placeholder="Alex" onchange={(e)=>{
                            setInputs((c)=>(
                                {...c,
                                name:e.target.value}
                            ))

                        }}/>
                        <Input title="Email" placeholder="Alex@gmail.com" onchange={(e)=>{
                            setInputs((c)=>( 
                                {...c,
                                email:e.target.value.toLowerCase()}
                            ))

                    }}/>
                    <div className="flex">
                        <Input title="password" placeholder="min-6" type={ passwordVisible? "text": "password"} button={true} onclick={()=>togglePasswordVisibility()} buttonClas={passwordVisible} onchange={(e)=>{
                            setInputs((c)=>(
                                {...c,
                                password:e.target.value}
                            ))

                        }}/>
                    </div>
                        <button onClick={SendReq}  className="rounded bg-black text-white text-bold items-center mt-7 py-2 mr-10 w-full">
                            Sign Up
                        </button>
        

                
            </div>
            
        </div>
        {/* {suc?<Stack><Alert severity="success" variant="outlined">creatd user sucessfully</Alert></Stack>:<Stack>
                <Alert variant="outlined" severity="error">
                error while creating user
             </Alert>
            </Stack>} */}
        </div>
    )
}