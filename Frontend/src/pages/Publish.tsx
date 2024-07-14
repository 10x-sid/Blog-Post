import { Link } from "react-router-dom"

Link
export default function Publish(){
    return(
        <div>
            <div className="flex justify-between mt-3 p-2 border-b">
                 <Link to="/">
                <div className="flex flex-col justify-center items-center pt-2 text-black font-extrabold">
                    BLOG-POST
                </div>
                </Link>
                
                    <button className="bg-green-700 hover:bg-green-800 flex flex-col justify-center items-center rounded-full h-3 w-6 px-10 py-5">Publish</button>
                
            </div>
            <div className="flex flex-col justify-center max-w-screen-lg w-full mx-[200px] mt-10 shadow-md border-1 bg-slate-400 rounded-full">
                 <input className="h-10 text-2xl text-thin rounded-sm px-3  font-bold w-full bg-slate-50 " placeholder="Title"/>
                <textarea className="h-screen text-lg bg-slate-50 rounded-lg pr-3 mt-2" placeholder="|"></textarea>

            </div>

        </div>
    )
}