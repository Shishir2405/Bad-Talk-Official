import React from 'react';
import { Briefcase, Globe, Rocket, Newspaper, Calendar, BookMarked } from 'lucide-react';
import { Link } from 'react-router-dom';

const Card = ({ icon: Icon, title, href, description }) => (
  <Link
    href={href}
    className="group relative p-6 bg-black rounded-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-105 active:scale-95 cursor-pointer border border-gray-800 hover:border-red-500 block overflow-hidden shadow-lg shadow-red-500/20 hover:shadow-red-500/40"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-red-500/0 to-red-600/0 opacity-0 group-hover:opacity-20 transition-all duration-500 group-hover:rotate-180 group-hover:scale-150" />
    <div className="flex flex-col items-center justify-center">
      {React.cloneElement(Icon, { className: "w-8 h-8 text-red-500 mb-3 transition-all duration-300 group-hover:scale-110 group-hover:text-red-400" })}
      <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">{title}</h3>
      <p className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors duration-300 text-center">{description}</p>
    </div>
  </Link>
);

const HoverCards = () => {
  const cards = [
    { id: 1, title: "Jobs", href: "/jobs", icon: <Briefcase className="h-4 w-4" />, description: "Explore job opportunities." },
    { id: 2, title: "Community", href: "/community", icon: <Globe className="h-4 w-4" />, description: "Join our community." },
    { id: 3, title: "Workshops", href: "/workshops", icon: <Rocket className="h-4 w-4" />, description: "Learn with workshops." },
    { id: 4, title: "News", href: "/news", icon: <Newspaper className="h-4 w-4" />, description: "Stay updated with news." },
    { id: 5, title: "Events", href: "/events", icon: <Calendar className="h-4 w-4" />, description: "Discover upcoming events." },
    { id: 6, title: "Blogs", href: "/blog", icon: <BookMarked className="h-4 w-4" />, description: "Read insightful blogs." }
  ];

  return (
    <div className="p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => <Card key={card.id} {...card} />)}
        </div>
      </div>
    </div>
  );
};

export default HoverCards;