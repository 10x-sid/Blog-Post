import  { ChangeEvent } from 'react'
interface input{
    title:string,
    placeholder:string,
    onchange: (e:ChangeEvent<HTMLInputElement>) => void,
    type?:string

}
export default function Input({title,placeholder,onchange,type}:input){
    return(
        <div className='mt-3 w-auto'>
            <div className="text-black text-sm font-bold">
                {title}
            </div>
            <input 
             onChange={onchange} type={type ||"text"} placeholder={placeholder} className=" border-2  rounded w-auto py-2 pr-24 pl-3 mt-1 text-gray-700 leading-tight "></input>
             
        </div>
    )

}