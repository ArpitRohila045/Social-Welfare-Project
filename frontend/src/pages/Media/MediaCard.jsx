import React from 'react'

const MediaCard = ({img, title, description}) => {
  return (
    <div>
        <div className='h-44 bg-zinc-200'>
            <img className='w-full h-full object-cover' src={img} alt="" />
        </div>
        <div className='p-3'>
            <h4 className='font-semibold'>{title}</h4>
            <p className='text-slate-600 text-sm'>{description}</p>
        </div>
    </div>
  )
}

export default MediaCard