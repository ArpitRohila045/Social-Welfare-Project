import React from 'react';

const Card = ({ img, heading, description}) => {
    return (
        <div className='text-center p-2'>
            <div className='h-48 w-full overflow-hidden rounded-lg'>
                <img className='w-full h-full object-contain' src={img} alt="Card Image" />
            </div>
            <div className='mt-4'>
                <h3 className='font-semibold'>{heading}</h3>
            </div>
            <p className='text-sm mb-4'>{description}</p>
            <button>
                <a href="" className='text-sm text-red-500 inline-block bg-red-100 px-2 py-1 rounded-full flex gap-1 items-center transition-all duration-300 ease-in-out hover:gap-2'>
                    <i className="uil uil-arrow-right"></i>
                    Learn More
                </a>
            </button>
        </div>
    );
}

export default Card;
