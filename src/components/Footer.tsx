import React from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

interface FooterProps {
  name: string;
  email: string;
  linkedin: string;
  github: string;
  phone: string;
}

const Footer: React.FC<FooterProps> = ({
  name,
  email,
  linkedin,
  github,
  phone,
}) => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">{name}</h3>
            <p className="text-white/80">Professional Portfolio</p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
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
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>&copy; {year} {name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;