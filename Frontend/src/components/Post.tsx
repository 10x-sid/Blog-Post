import { CardProps } from "./BlogCard"

export const Post=({title,content,publishDate,authorName}:CardProps)=>{
    return(
        <div className=" grid grid-col-14 mx-20">
            <div className="grid grid-col-10">{title} {content}</div>
            <div className="grid grid-cols-4">{authorName} {publishDate }</div>
        
        </div>
    )

}