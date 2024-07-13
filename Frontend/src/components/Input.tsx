import  { ChangeEvent } from 'react'


import { FaEye, FaEyeSlash } from 'react-icons/fa'
interface input{
    title:string,
    placeholder:string,
    onchange: (e:ChangeEvent<HTMLInputElement>) => void,
    type?:string,
    buttonClas?:boolean;
    button?: boolean;
    onclick?:()=>void

}
//to put the button and input in same use relative inline block to wrapper and abousulte and right-0 to buttton
export default function Input({title,placeholder,onchange,type,button,buttonClas,onclick}:input){
    return(
        <div className='mt-3 w-auto'>  
            <div className="text-black text-sm font-bold">
                {title}
            </div>
           <div className=' relative inline-block '>
                <input 
                    onChange={onchange} type={type ||"text"} placeholder={placeholder} className=" border-2  rounded w-auto py-2 pr-24 pl-3 mt-1 text-gray-700 leading-tight ">

                </input>
                {button? <button className='absolute h-full items-center top-0 right-0 px-2 text-gray-500 ' onClick={onclick}>
                        {buttonClas? <FaEyeSlash /> : <FaEye />}
                </button>:<></>}
                
           </div>
        </div>
    )

}