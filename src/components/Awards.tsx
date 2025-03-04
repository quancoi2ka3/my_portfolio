import React from 'react';
import { Trophy } from 'lucide-react';

interface AwardItem {
  id: number;
  title: string;
  year: string;
  organization: string;
  description: string;
}

interface AwardsProps {
  awards: AwardItem[];
}

const Awards: React.FC<AwardsProps> = ({ awards }) => {
  return (
    <section id="awards" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-16">Awards & Activities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award) => (
            <div 
              key={award.id} 
              className="card p-6 hover:translate-y-[-5px]"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                  <Trophy className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">{award.title}</h3>
                  <p className="text-secondary">{award.year}</p>
                </div>
              </div>
              <p className="text-gray-600 font-semibold mb-2">{award.organization}</p>
              <p className="text-gray-700">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;