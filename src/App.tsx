import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { personalInfo, experiences, awards, projects } from './data/mockData';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Header 
        name={personalInfo.name}
        title={personalInfo.title}
        education={personalInfo.education}
        location={personalInfo.location}
        email={personalInfo.email}
        linkedin={personalInfo.linkedin}
        github={personalInfo.github}
        phone={personalInfo.phone}
        cvLink={personalInfo.cvLink}
        avatarUrl={personalInfo.avatarUrl}
      />
      <Experience experiences={experiences} />
      <Awards awards={awards} />
      <Projects projects={projects} />
      <Footer 
        name={personalInfo.name}
        email={personalInfo.email}
        linkedin={personalInfo.linkedin}
        github={personalInfo.github}
        phone={personalInfo.phone}
      />
    </div>
  );
}

export default App;