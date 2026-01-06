import React from 'react';
import Banner from './Banner';
import Card from './Card';
import img1 from '../../assets/campaign-1.avif';
import img2 from '../../assets/champaign-charity.avif';
import img3 from '../../assets/day-of-charity.avif';
import img4 from '../../assets/champaign-humanity-day.avif';
import img5 from '../../assets/heath-day.avif';
import img6 from '../../assets/health-campaign.jpg';
import img7 from '../../assets/education-campaign.avif';
import img8 from '../../assets/boy-reading.avif';
import img9 from '../../assets/education-day.avif';

const campaignData = {
    "Charity Campaign": [
        {
            img: img1,
            heading: 'Helping Hands',
            description: 'Join us in supporting those in need. Every donation counts.',
        },
        {
            img: img2,
            heading: 'Charity for a Cause',
            description: 'Together, we can make a difference in the lives of those who need it the most.',
        },
        {
            img: img3,
            heading: 'Day of Charity',
            description: 'A day dedicated to spreading kindness and giving back to the community.',
        },
    ],
    "Health Campaign": [
        {
            img: img4,
            heading: 'Health Awareness',
            description: 'Raising awareness for healthier lifestyles and preventative measures.',
        },
        {
            img: img5,
            heading: 'Mental Health Matters',
            description: 'Support the cause for better mental health resources and education.',
        },
        {
            img: img6,
            heading: 'Campaign for Health',
            description: 'A nationwide effort to promote physical health and fitness.',
        },
    ],
    "Education Campaign": [
        {
            img: img7,
            heading: 'Education for All',
            description: 'A campaign dedicated to providing education to underprivileged children.',
        },
        {
            img: img8,
            heading: 'Read to Lead',
            description: 'Empowering children through reading and education.',
        },
        {
            img: img9,
            heading: 'Day of Learning',
            description: 'A special day focusing on educational activities and learning opportunities.',
        },
    ]
};

const CampaignSection = ({ heading, cardData }) => {
    return (
        <section className='mb-4'>
            <h2 className='font-bold text-xl mb-2'>{heading}</h2>
            <div className='flex gap-2'>
                {cardData.map((e, index) => (
                    <Card
                        key={index}
                        img={e.img}
                        heading={e.heading}
                        description={e.description}
                    />
                ))}
            </div>
        </section>
    );
};

const Campaign = () => {
    return (
        <div className='m-auto max-w-screen-xl'>
            <Banner />
            {Object.keys(campaignData).map((key, index) => (
                <CampaignSection
                    key={index}
                    heading={key}
                    cardData={campaignData[key]}
                />
            ))}
        </div>
    );
};

export default Campaign;