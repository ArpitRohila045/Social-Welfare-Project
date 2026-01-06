import React from 'react'
import Bento from './Bento'
import FeaturedCard from '../News/FeaturedCard';
import Banner from './Banner';
import MediaCard from './MediaCard';

const imgPlacehoder = "https://imageplaceholder.net/600x400/eeeeee/cbd5e1?text=img";
const vidPlacehoder = "https://imageplaceholder.net/600x400/eeeeee/cbd5e1?text=video";

const featuredCardsData = [
  {
    img: '/events/Event1.jpeg',
    // heading: 'Global Market Trends',
    source: 'BBC',
    time: '15 min ago'
  },
  {
    img: '/events/Event2.jpg',
    // heading: 'Tech Innovations 2024',
    source: 'CNN',
    time: '30 min ago'
  },
  {
    img: '/events/event3.jpg',
    // heading: 'Health Breakthroughs',
    source: 'Reuters',
    time: '1 hour ago'
  },
  {
    img: '/events/event4.jpg',
    // heading: 'Art and Culture',
    source: 'The Guardian',
    time: '2 hours ago'
  },
  {
    img: '/events/event5.png',
    // heading: 'Political Updates',
    source: 'Al Jazeera',
    time: '3 hours ago'
  },
  {
    img: '/events/event6.jpg',
    // heading: 'Environmental News',
    source: 'BBC',
    time: '4 hours ago'
  },
  {
    img: 'events/event6.png',
    // heading: 'Sports Highlights',
    source: 'ESPN',
    time: '5 hours ago'
  },
  {
    img: 'events/event7.jpg',
    // heading: 'Business Insights',
    source: 'Bloomberg',
    time: '6 hours ago'
  },
  {
    img: 'events/event8.jpeg',
    // heading: 'Science Discoveries',
    source: 'Nature',
    time: '7 hours ago'
  }
  // {
  //   img: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
  //   heading: 'Travel Tips',
  //   source: 'Lonely Planet',
  //   time: '8 hours ago'
  // },
  // {
  //   img: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg',
  //   heading: 'Fashion Trends',
  //   source: 'Vogue',
  //   time: '9 hours ago'
  // },
  // {
  //   img: 'https://images.pexels.com/photos/3184631/pexels-photo-3184631.jpeg',
  //   heading: 'Food and Recipes',
  //   source: 'Food Network',
  //   time: '10 hours ago'
  // }
];

const mediaCardsData = [
  {
    img: '/events/Event1.jpeg',
    title: 'Drugs free India',
    // description: 'A comprehensive guide to designing a modern website.'
  },
  {
    img: '/events/Event2.jpg',
    title: 'Senior citizen welfare',
    // description: 'Learn the basics of machine learning and its applications.'
  },
  {
    img: '/events/event3.jpg',
    title: 'Bal vikas yojna',
    // description: 'Tips and tricks for maintaining a healthy diet.'
  },
  {
    img: '/events/event4.jpg',
    title: 'Art and Culture',
    // description: 'How to travel the world without breaking the bank.'
  },
  {
    img: '/events/event5.png',
    title: 'Nasha Mukti Abhiyan',
    // description: 'Techniques and tips for taking stunning photos.'
  },
  {
    img: '/events/event6.png',
    title: 'vridha pension yojna',
    // description: 'An introduction to yoga and its benefits.'
  },
  {
    img: '/events/event6.jpg',
    title: 'Yuva Swabhiman Yojna',
    // description: 'A beginner\'s guide to investing in the stock market.'
  },
  {
    img: '/events/event7.jpg',
    title: 'Bal Siksha Yojna',
    // description: 'Learn how to cook authentic Italian dishes.'
  },
  {
    img: '/events/event8.jpeg',
    title: 'Siksha Abhiyan',
    // description: 'Steps to take when starting your own business.'
  }
];


const Media = () => {
  return (
    <>
      <Banner />
      <div className='m-auto max-w-screen-xl'>
        {/* <div className='h-[500px] my-8'>
          <Bento />
        </div> */}
        <section className="mb-20">
          <h3 className='font-semibold text-lg my-4'>Media</h3>

          <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-2 gap-y-6'>
            {
              featuredCardsData.map((e, index) => (
                <FeaturedCard
                  key={index}
                  img={e.img}
                  heading={e.heading}
                  source={e.source}
                  time={e.time}
                />
              ))
            }
          </div>
        </section>
        <section>
          <h3 className='font-semibold text-lg my-4'>Video Catalog</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-6'>
            {
              mediaCardsData.map((e, index) => (
                <MediaCard
                  key={index}
                  img={e.img}
                  title={e.title}
                  description={e.description}
                />
              ))
            }
          </div>
        </section>
      </div>
    </>
  )
}

export default Media