import FeaturedCard from '../News/FeaturedCard';
import Banner from './Banner';
import MediaCard from './MediaCard';
import slider1 from '../../assets/slider1.jpg'
import healthCampaign from '../../assets/health-campaign.jpg'
import glanceBanner from '../../assets/glance-banner.jpg'
import campaignImg from '../../assets/campaign.jpg'
import campaign1 from '../../assets/campaign-1.avif'

// const imgPlacehoder = "https://imageplaceholder.net/600x400/eeeeee/cbd5e1?text=img";
// const vidPlacehoder = "https://imageplaceholder.net/600x400/eeeeee/cbd5e1?text=video";

const featuredCardsData = [
  {
    img: slider1,
    // heading: 'Global Market Trends',
    source: 'BBC',
    time: '15 min ago'
  },
  {
    img: healthCampaign,
    // heading: 'Tech Innovations 2024',
    source: 'CNN',
    time: '30 min ago'
  },
  {
    img: glanceBanner,
    // heading: 'Health Breakthroughs',
    source: 'Reuters',
    time: '1 hour ago'
  },
  {
    img: campaignImg,
    // heading: 'Art and Culture',
    source: 'The Guardian',
    time: '2 hours ago'
  },
  {
    img: campaign1,
    // heading: 'Political Updates',
    source: 'Al Jazeera',
    time: '3 hours ago'
  },
  {
    img: healthCampaign,
    // heading: 'Environmental News',
    source: 'BBC',
    time: '4 hours ago'
  },
  {
    img: campaignImg,
    // heading: 'Sports Highlights',
    source: 'ESPN',
    time: '5 hours ago'
  },
  {
    img: slider1,
    // heading: 'Business Insights',
    source: 'Bloomberg',
    time: '6 hours ago'
  },
  {
    img: glanceBanner,
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
    img: slider1,
    title: 'Drugs free India',
    // description: 'A comprehensive guide to designing a modern website.'
  },
  {
    img: healthCampaign,
    title: 'Senior citizen welfare',
    // description: 'Learn the basics of machine learning and its applications.'
  },
  {
    img: glanceBanner,
    title: 'Bal vikas yojna',
    // description: 'Tips and tricks for maintaining a healthy diet.'
  },
  {
    img: campaignImg,
    title: 'Art and Culture',
    // description: 'How to travel the world without breaking the bank.'
  },
  {
    img: campaign1,
    title: 'Nasha Mukti Abhiyan',
    // description: 'Techniques and tips for taking stunning photos.'
  },
  {
    img: healthCampaign,
    title: 'vridha pension yojna',
    // description: 'An introduction to yoga and its benefits.'
  },
  {
    img: campaignImg,
    title: 'Yuva Swabhiman Yojna',
    // description: 'A beginner\'s guide to investing in the stock market.'
  },
  {
    img: slider1,
    title: 'Bal Siksha Yojna',
    // description: 'Learn how to cook authentic Italian dishes.'
  },
  {
    img: glanceBanner,
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