import React from 'react';
import { Heart, Quote } from 'lucide-react';

interface AboutProps {
  bio: string[];
  interests: { icon: string; name: string }[];
  quote: string;
  imageUrl: string;
}

const About: React.FC<AboutProps> = ({ bio, interests, quote, imageUrl }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-16">About Me</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3">
            <div className="relative">
              <img 
                src={imageUrl} 
                alt="Personal photo" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent p-4 rounded-lg shadow-lg">
                <Quote className="w-8 h-8 text-primary" />
                <p className="text-primary font-medium italic mt-2">{quote}</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">My Story</h3>
              {bio.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
              ))}
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Personal Interests</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {interests.map((interest, index) => (
                  <div 
                    key={index} 
                    className="bg-background rounded-lg p-4 flex items-center shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                      <Heart className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-medium text-primary">{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;