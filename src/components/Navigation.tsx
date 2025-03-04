import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth',
      });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className="text-white text-2xl font-bold"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Portfolio
          </a>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-accent transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-white hover:text-accent transition-colors duration-300"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('awards')}
              className="text-white hover:text-accent transition-colors duration-300"
            >
              Awards
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-white hover:text-accent transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-white hover:text-accent transition-colors duration-300"
            >
              Blog
            </button>
          </div>
          
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-primary/95 rounded-lg p-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-accent transition-colors duration-300 py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-white hover:text-accent transition-colors duration-300 py-2"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('awards')}
                className="text-white hover:text-accent transition-colors duration-300 py-2"
              >
                Awards
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-white hover:text-accent transition-colors duration-300 py-2"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-white hover:text-accent transition-colors duration-300 py-2"
              >
                Blog
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;