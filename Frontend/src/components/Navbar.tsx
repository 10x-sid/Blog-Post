import { Avatar } from "./BlogCard"

export const Navbar=()=>{
    return(
        <div className=" flex justify-between m-5 p-2 border-b ">
            <div className="flex flex-col justify-center text-black font-extrabold">
                BLOG-POST
            </div>
            {/* <div className=" relative inline-block ">
                <input type="text"  className=" invisible md:visible rounded-xl h-8 w-auto  border-gray-500 border-2 flex flex-col justify-center"></input>
                <button className="absolute right-0 top-0 mx-2 text-xl h-full items-center">
                < LuSearchCheck/>
                </button>
            </div> */}
            <Avatar title="Harikirat" size="big"></Avatar>
            
        
        </div>
    )
}