import { useNavigate } from "react-router-dom";
import { useLoggedIn } from "../hooks/get";

export interface CardProps {
    authorName: string;
    publishDate: string;
    title: string;
    content: string;
}

export function BlogCard({ authorName, publishDate, title, content }: CardProps) {
    const data= content.split(" ").slice(0,21).join(" ")
    return (
        <div className="border-b border-slate-200 rounded-lg p-4 cursor-pointer">
                <div className="flex ">
                    <div className="felx flex-col justify-center">
                        <Avatar title={authorName}/>
                    </div> 
                    <div className="font-medium text-gray-800 ml-3">{authorName[0].toUpperCase()+authorName.slice(1,authorName.length)} ~</div><div className="font-extralight  text-gray-600">{publishDate}</div>
                </div>
           
            <div className="font-extrabold max-w-lg  text-xl mt-2">{title}</div>
            <div className="text-gray-500 font-normal max-w-xl">{data}...</div>
            <div className="text-gray-900 text-sm mt-3">{Math.ceil(content.length / 100)} min read</div>
        </div>
    );
}

export function Avatar({title,size="small"}:{title:string,size?:"small"|"big"}){
    const checkLoggedIn=useLoggedIn()
    const navigate=useNavigate()
    
    //@ts-ignore
    const handleProfileClick = async (event) => {
        event.preventDefault();
        await checkLoggedIn()
        navigate("/profile")
      };

    return(
        
            <div  onClick={handleProfileClick}  className={`relative inline-flex items-center justify-center ${size==="small"? " w-5 h-5 " : " w-10 h-10 "}overflow-hidden bg-gray-500    rounded-full `}>
                <span className={`text-black ${size==="small"? "font-medium":"text-xl"}`}>{title.toUpperCase()[0]}</span>
            </div>

    )

}