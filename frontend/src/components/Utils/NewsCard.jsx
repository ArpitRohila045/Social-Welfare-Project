import React from 'react';

const NewsCard = ({ headline, content, source, sourceLogo, time, img }) => {
    return (
        <article
            className='
            group bg-white 
            rounded-xl 
            border border-slate-200
            shadow-sm hover:shadow-md
            transition-all duration-200
            overflow-hidden'
        >
            <div
                className='h-44 w-full overflow-hidden'
            >
                <img 
                    src={img} 
                    alt={headline} 
                    className="
                        w-full h-full object-cover
                        transistion-transform duration-300
                        group-hover:scale-105"
                />  
            </div>
            
            <div
                className="p-4 flex flex-col gap-3"
            >
                <h3 className="font-semibold text-base text-slate-900 leading-snug line-clamp-2">
                    {headline}
                </h3>

                <p className="text-sm text-slate-600 line-clamp-3">
                    {content}
                </p>

                <div className="flex items-center justify-between pt-3 border-t text-xs text-slate-500">

                <div className="flex items-center gap-2">
                    {sourceLogo && (
                    <img
                        src={sourceLogo}
                        alt={source}
                        className="w-5 h-5 object-contain"
                    />
                    )}
                    <span className="font-medium">{source}</span>
                </div>

                <span>{time}</span>
                </div>

            </div>

        </article>

        // <div className='bg-slate-100 shadow-md max-w-auto rounded-sm'>

        //     <div className="flex gap-2">
        //         <div className="w-2/3 p-4 pr-0">
        //             <h3 className='font-semibold text-lg'>{headline}</h3>
        //             <p className='hidden md:block text-base text-slate-600 overflow-hidden h-20'>
        //                 {content}
        //             </p>
        //         </div>
        //         <div className='p-4 pl-0 w-1/3 overflow-hidden'>
        //             <img
        //                 src={img}
        //                 alt="img"
        //                 className='w-full h-full object-cover'
        //             />      
        //         </div>
        //     </div>
        //     <h1 className='bottom-0'> {time} </h1>
        // </div>
    );
}

export default NewsCard;
