import React from "react";

const TreadingNews = ({ views, heading, img, tags }) => {
    return (
        <div className='w-full'>
            <h3 className='font-semibold text-lg my-4'>Trending</h3>
            <div className='bg-slate-100 rounded-lg overflow-hidden'>
                <div className='h-72 bg-slate-300 rounded-lg'>
                    <img className='w-full h-full object-cover' src={img} alt="Trending News" />
                </div>
                <div className='p-4'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-[2px] text-slate-500'>
                            <i className="text-lg uil uil-history"></i>
                            <span>{views}</span>
                        </div>
                        <div className='flex gap-1 mb-2'>
                            {
                                tags.map((tag, index) => (
                                    <span key={index} className='text-xs font-semibold bg-violet-200 text-violet-500 px-2 py-[1px] rounded'>#{tag}</span>
                                ))
                            }
                        </div>
                    </div>
                    <h2 className='font-bold text-lg'>{heading}</h2>
                </div>
            </div>
        </div>
    );
}

export default TreadingNews;