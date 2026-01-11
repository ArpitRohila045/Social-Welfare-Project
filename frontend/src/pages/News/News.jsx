import React from 'react'
import NewsCard from '../../components/Utils/NewsCard'
import Headline from './Headline';
import FeaturedCard from './FeaturedCard';
import FilterOption from '../../components/Utils/FilterOption';
import TreadingNews from './TreadingNews';
import newsData from './newsData.json'

const newsCategories = ["World", "Local", "Politics", "Business", "Technology", "Health", "Science", "Sports", "Entertainment", "Lifestyle", "Education", "Environment", "Opinion", "Weather", "Crime",
];

const treadingNewsData = [
    {
        views: '123k',
        heading: 'NASHA MUKT BHARAT ABHIYAAN',
        tags: ['Finance', 'Market'],
        img: '/events/Event1.jpeg',
    },
    {
        views: '98k',
        heading: 'International Day of Older Persons',
        tags: ['Technology', 'Innovation'],
        img: '/events/Event2.jpg',
    }
];


const featuredNewsData = [
    {
        heading: "Global Market Trends",
        img: "/events/event3.jpg",
        source: "BBC",
        time: "15 min ago",
    },
    {
        heading: "Tech Innovations 2024",
        img: "/events/event4.jpg",
        source: "CNN",
        time: "30 min ago",
    },
    {
        heading: "Health Breakthroughs",
        img: "/events/event5.png",
        source: "Reuters",
        time: "1 hour ago",
    },
    {
        heading: "Art and Culture",
        img: "/events/Event2.jpg",
        source: "The Guardian",
        time: "2 hours ago",
    },
    {
        heading: "Political Updates",
        img: "/events/event6.png",
        source: "Al Jazeera",
        time: "3 hours ago",
    },
    {
        heading: "Environmental News",
        img: "/events/event6.jpg",
        source: "BBC",
        time: "4 hours ago",
    },
    {
        heading: "Sports Highlights",
        img: "/events/event7.jpg",
        source: "ESPN",
        time: "5 hours ago",
    },
    {
        heading: "Business Insights",
        img: "/events/Event1.jpeg",
        source: "Bloomberg",
        time: "6 hours ago",
    },
    {
        heading: "Global Market Trends",
        img: "/events/event3.jpg",
        source: "BBC",
        time: "15 min ago",
    },
    {
        heading: "Tech Innovations 2024",
        img: "/events/event4.jpg",
        source: "CNN",
        time: "30 min ago",
    },
    {
        heading: "Health Breakthroughs",
        img: "/events/event5.png",
        source: "Reuters",
        time: "1 hour ago",
    },
    {
        heading: "Art and Culture",
        img: "/events/Event2.jpg",
        source: "The Guardian",
        time: "2 hours ago",
    }
];

const headlines = [
    {
        img: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
        heading: "Global Market Trends",
        tags: ["Finance", "Market"],
        views: "1.2K",
        time: "2 hours ago",
    },
    {
        img: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg",
        heading: "Tech Innovations 2024",
        tags: ["Technology", "Innovation"],
        views: "900",
        time: "5 hours ago",
    },
    {
        img: "https://images.pexels.com/photos/3184631/pexels-photo-3184631.jpeg",
        heading: "Health Breakthroughs",
        tags: ["Health", "Science"],
        views: "1.5K",
        time: "1 day ago",
    },
    {
        img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
        heading: "Art and Culture",
        tags: ["Art", "Culture"],
        views: "800",
        time: "3 days ago",
    },
    {
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        heading: "Political Updates",
        tags: ["Politics"],
        views: "1.1K",
        time: "1 week ago",
    },
    {
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        heading: "Environmental News",
        tags: ["Environment"],
        views: "2K",
        time: "2 weeks ago",
    }
];



const News = () => {
    return (
        <main className="max-w-screen-xl mx-auto px-4 md:px-20 py-10">

            {/* Trending Section */}
            <section className="mb-16">
                <h2 className="text-xl font-bold text-slate-900 mb-6">
                    Trending Now
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <TreadingNews {...treadingNewsData[0]} />
                    <TreadingNews {...treadingNewsData[1]} />
                </div>
            </section>

            {/* Featured News */}
            <section className="mb-16">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-slate-900">
                        Featured News
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredNewsData.map((e, index) => (
                        <FeaturedCard key={index} {...e} />
                    ))}
                </div>
            </section>

            {/* All News */}
            <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                    All News
                </h2>

                <div className="mb-6">
                    <FilterOption items={newsCategories} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {newsData.map((e, index) => (
                        <NewsCard key={index} {...e} />
                    ))}
                </div>
            </section>

        </main>
    );
};

export default News