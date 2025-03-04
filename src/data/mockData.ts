// Mock data for the portfolio website
// Replace with your actual information

export const personalInfo = {
  name: "Nguyen Manh Quan",
  title: "Software Engineer",
  education: "Thuy Loi University",
  location: "Ha Noi, Viet Nam",
  email: "nguyenmanhquan17072003@gmail.com",
  linkedin: "https://www.linkedin.com/in/manh-quan-96a113269/",
  github: "https://github.com/quancoi2ka3",
  phone: "+84 968 031 328",
  cvLink: "/NguyenManhQuan_CV_dotNET.pdf", // Add your actual CV file
  avatarUrl: "../image/avt_profile.jpg",
};

export const experiences = [
  {
    id: 1,
    company: "OLM Education",
    position: "Senior Front-end Developer",
    startDate: "Jan 2022",
    endDate: "Present",
    description: [
      "Led the development of a responsive web application using React and TypeScript",
      "Implemented state management using Redux and optimized performance",
      "Collaborated with UX/UI designers to implement pixel-perfect designs",
      "Mentored junior developers and conducted code reviews"
    ],
    logo: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    company: "Company Name 2",
    position: "Front-end Developer",
    startDate: "Mar 2020",
    endDate: "Dec 2021",
    description: [
      "Developed and maintained multiple client websites using HTML, CSS, and JavaScript",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Worked with RESTful APIs to fetch and display data",
      "Participated in agile development processes"
    ],
    logo: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    company: "Company Name 3",
    position: "Web Developer Intern",
    startDate: "Jun 2019",
    endDate: "Feb 2020",
    description: [
      "Assisted in the development of company website using HTML, CSS, and JavaScript",
      "Created responsive email templates",
      "Learned and applied best practices for web development",
      "Participated in team meetings and contributed ideas"
    ],
    logo: "https://via.placeholder.com/150",
  },
];

export const awards = [
  {
    id: 1,
    title: "Best Web Application",
    year: "2023",
    organization: "Tech Conference Name",
    description: "Awarded for developing an innovative web application that solved a significant industry problem."
  },
  {
    id: 2,
    title: "Hackathon Winner",
    year: "2022",
    organization: "Hackathon Name",
    description: "First place in a 48-hour hackathon for creating a web application that addressed accessibility challenges."
  },
  {
    id: 3,
    title: "Outstanding Graduate",
    year: "2019",
    organization: "University Name",
    description: "Recognized for academic excellence and contributions to the computer science department."
  },
  {
    id: 4,
    title: "Open Source Contributor",
    year: "2021",
    organization: "GitHub",
    description: "Recognized for significant contributions to open-source projects in the JavaScript ecosystem."
  },
  {
    id: 5,
    title: "Web Design Competition",
    year: "2020",
    organization: "Design Association",
    description: "Second place in a national web design competition for creating an innovative user interface."
  },
  {
    id: 6,
    title: "Community Leadership",
    year: "2022",
    organization: "Tech Community",
    description: "Recognized for organizing and leading workshops to teach coding to underrepresented groups."
  },
];

export const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce platform with product filtering, cart functionality, and payment integration.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
    githubLink: "https://github.com/yourusername/project1",
    demoLink: "https://project1-demo.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A drag-and-drop task management application with user authentication and real-time updates.",
    image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    githubLink: "https://github.com/yourusername/project2",
    demoLink: "https://project2-demo.com",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather data for multiple locations.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
    githubLink: "https://github.com/yourusername/project3",
  },
  {
    id: 4,
    title: "Fitness Tracker",
    description: "A mobile-responsive fitness tracking application that allows users to log and visualize their workouts.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    technologies: ["React Native", "GraphQL", "Apollo"],
    githubLink: "https://github.com/yourusername/project4",
    demoLink: "https://project4-demo.com",
  },
  {
    id: 5,
    title: "Recipe Finder",
    description: "A recipe finder application that allows users to search for recipes based on ingredients they have.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    technologies: ["HTML", "CSS", "JavaScript", "Recipe API"],
    githubLink: "https://github.com/yourusername/project5",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and experience.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1055&q=80",
    technologies: ["React", "Tailwind CSS", "Vite"],
    githubLink: "https://github.com/yourusername/portfolio",
    demoLink: "https://yourportfolio.com",
  },
];