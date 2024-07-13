

interface CardProps {
    authorName: string;
    publishDate: string;
    title: string;
    content: string;
}

export default function BlogCard({ authorName, publishDate, title, content }: CardProps) {
    return (
        <div className="border-b border-slate-200 rounded-lg p-4">
                <div className="flex ">
                    <div className="felx flex-col justify-center">
                        <Avatar title={authorName}/>
                    </div> 
                    <div className="font-medium text-gray-800 ml-3">{authorName} ~</div><div className="font-extralight  text-gray-600">{publishDate}</div>
                </div>
           
            <div className="font-semibold  text-xl mt-2">{title}</div>
            <div className="text-gray-500 font-normal">{content}...</div>
            <div className="text-gray-900 text-sm mt-3">{Math.ceil(content.length / 100)} min read</div>
        </div>
    );
}

function Avatar({title}:{title:string}){

    return(
        
            <div className="relative inline-flex items-center justify-center w-5 h-5   overflow-hidden bg-gray-500    rounded-full ">
                <span className="font-medium text-black">{title.toUpperCase()[0]}</span>
            </div>

    )

}