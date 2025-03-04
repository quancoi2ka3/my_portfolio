import React from 'react';
import { Mail, Linkedin, Github, Phone, Download, GraduationCap, MapPin } from 'lucide-react';

interface HeaderProps {
  name: string;
  title: string;
  education: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  phone: string;
  cvLink: string;
  avatarUrl: string;
}

const Header: React.FC<HeaderProps> = ({
  name,
  title,
  education,
  location,
  email,
  linkedin,
  github,
  phone,
  cvLink,
  avatarUrl,
}) => {
  return (
    <header className="bg-primary text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row items-center mb-8 md:mb-0">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent mb-6 md:mb-0 md:mr-8">
              <img
                src={avatarUrl}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{name}</h1>
              <h2 className="text-2xl md:text-3xl text-accent mb-4">{title}</h2>
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-6">
                <div className="flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  <span>{education}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{location}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href={`mailto:${email}`}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`tel:${phone}`}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
            <a
              href={cvLink}
              download
              className="btn bg-accent text-primary hover:bg-white flex items-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;