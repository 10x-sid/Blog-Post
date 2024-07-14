
import { CardProps } from './BlogCard';

export const Post = ({ title, content, publishDate, authorName }: CardProps) => {
    return (
        <div className="grid grid-cols-12 mx-10 px-2 mt-3 w-auto">
            <div className="col-span-10 pt-5  px-20">
                <h2 className='font-extrabold text-black text-4xl mb-10'>{title}</h2>
                <div className='flex'>
                    <div className="text-gray-700 text-4xl flex flex-col justify-start top-0 pb- mb-2 font-bold  m-2  rounded-full">{(content.slice(0,1).toUpperCase())}</div>
                    
                    <div className='font-semibold text-gray-600 text-lg overflow-hidden pr-20'>{content.slice(1,content.split(" ")[0].length)+" "+content.split(" ").slice(1,20).join(" ")}</div>
                </div>
                <div className='font-semibold text-gray-600 text-lg overflow-hidden pr-20'>{content.split(" ").slice(20,content.length).join(" ")}</div>
            </div>
            <div className="col-span-2 mt-5">
                <div className='flex'>
                    <div className=' rounded-full w-5 h-5 m-1 bg-slate-300 flex flex-col justify-center'></div>
                    <p className='text-black font-bold text-md'>{authorName.toUpperCase().split(" ")[0]}</p>
                </div>
                <p className='font-normal text-lg text-slate-700 underline'>Published ON:{publishDate}</p>
            </div>
        </div>
    );
};

