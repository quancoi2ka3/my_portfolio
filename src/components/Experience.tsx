import React from 'react';
import { 
  VerticalTimeline, 
  VerticalTimelineElement 
} from 'react-vertical-timeline-component';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string[];
  logo?: string;
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-16">Work Experience</h2>
        
        <VerticalTimeline>
          {experiences.map((exp) => (
            <VerticalTimelineElement
              key={exp.id}
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: '#fff', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                borderRadius: '8px',
                padding: '2rem'
              }}
              contentArrowStyle={{ borderRight: '7px solid #fff' }}
              date={`${exp.startDate} - ${exp.endDate}`}
              iconStyle={{ background: '#2D5D7C', color: '#fff' }}
              icon={<Briefcase />}
            >
              <div className="flex items-center mb-4">
                {exp.logo && (
                  <img 
                    src={exp.logo} 
                    alt={exp.company} 
                    className="w-12 h-12 mr-4 object-contain"
                  />
                )}
                <div>
                  <h3 className="text-xl font-bold text-primary">{exp.position}</h3>
                  <h4 className="text-lg font-semibold text-secondary">{exp.company}</h4>
                </div>
              </div>
              
              <ul className="list-disc pl-5 mt-4 space-y-2">
                {exp.description.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;