

import { CardProps } from './BlogCard';

export const Post = ({ title, content, publishDate, authorName }: CardProps) => {
    
    return (
       <div className='flex flex-col justify-center items-center'>
             <div className="grid grid-cols-12 lg:mx-10 lg:px-2 mt-3 w-auto">
                    <div className="lg:col-span-10 col-span-12 pt-5 px-4 lg:px-20">
                        <h2 className={`lg:font-extrabold font-bold  text-black text-xl lg:text-4xl`}>{title}</h2>
                        <p className='text-gray-500 lg:hidden  text-lg flex flex-col justify-between top-0  mb-2 font-normal   rounded-full mt-2'>{content}</p>
                        <Lgcontent content={content}/>
                        
                    </div>

                
        
                    <div className="col-span-2 mt-5 invisible lg:visible">
                        <div className='flex '>
                            <div className=' rounded-full w-5 h-5 m-1 bg-slate-300 flex flex-col justify-center'></div>
                            <p className='text-black font-bold text-md'>{authorName.toUpperCase().split(" ")[0]}</p>
                        </div>
                        <p className='font-normal text-lg text-slate-700 underline'>Published ON:{publishDate}</p>
                    </div>
            </div>

       </div>
        
    );
};

function Lgcontent({content}:{content:string}){
    return(
        <div className='hidden lg:block mt-12'>
        <div className='flex '>
        <div className="text-gray-700  invisible lg:visible text-4xl flex flex-col justify-start top-0 pb- mb-2 font-bold  m-2  rounded-full">{(content.slice(0,1).toUpperCase())}</div>
        <div className='font-semibold invisible lg:visible text-gray-600 text-lg overflow-hidden pr-20'>{content.slice(1,content.split(" ")[0].length)+" "+content.split(" ").slice(1,20).join(" ")}</div>
        </div>
    
        <div className='font-semibold text-gray-600 invisible lg:visible  text-lg overflow-hidden pr-20'>{content.split(" ").slice(20,content.length).join(" ")}</div>
        </div>
    )
}

