import React from 'react';
import '../styles/Project.css';

const Projects = () => {
  
  const projectList = [
    {
      title: "Amazon",
      description: "A project modeled after Amazon, showcasing frontend design skills.",
      githubLink: "https://github.com/CodingBySahil/Amazon",
      demoLink: "https://codingbysahil.github.io/amazonClone/",
    },
    {
      title: "Clock",
      description: "An analog and digital clock project using HTML, CSS, and JavaScript.",
      githubLink: "https://github.com/CodingBySahil/digitalAndAnalogClock.git",
      demoLink: "https://codingbysahil.github.io/digitalAndAnalogClock/",
    },
    {
      title: "YouTube",
      description: "A YouTube clone with modern UI/UX, built using HTML, CSS, JavaScript, and React.",
      githubLink: "https://github.com/CodingBySahil/YouTube-clone",
      demoLink: "https://codingbysahil.github.io/youTubeClone/",
    },
    {
      title: "Facebook",
      description: "A Facebook clone built with HTML, CSS, and JavaScript.",
      githubLink: "https://github.com/CodingBySahil/Facebook-clone",
      demoLink: "https://codingbysahil.github.io/Facebook-clone/",
    },
    {
      title: "Rectangle Fight Game",
      description: "A game project involving rectangle fights, developed for fun and learning.",
      githubLink: "https://github.com/CodingBySahil/Rectangle-Fight-Game",
      demoLink: "https://codingbysahil.github.io/rectangleFightingGame/",
    },
    {
      title: "Todo App",
      description: "A simple and efficient Todo App built with React.",
      githubLink: "https://github.com/CodingBySahil/TodoApp",
      demoLink: "https://codingbysahil.github.io/todoApp/",
    },
    {
      title: "Netflix",
      description: "A Netflix-like project showcasing frontend skills and design.",
      githubLink: "https://github.com/CodingBySahil/Netflix",
      demoLink: "https://codingbysahil.github.io/netflixClone/",
    },
    {
      title: "Jumping Game",
      description: "A game project involving jumping characters, developed for fun and learning.",
      githubLink: "https://github.com/CodingBySahil/Jumping-Game",
      demoLink: " https://codingbysahil.github.io/jumpingGame/",
    },
    {
      title: "Saylani Form",
      description: "A form project developed as part of Saylani Mass IT Training.",
      githubLink: "https://github.com/CodingBySahil/Saylani-Form",
      demoLink: "https://codingbysahil.github.io/saylani-form/",
    },
    {
      title: "My CV",
      description: "My personal CV/resume project showcasing skills and experience.",
      githubLink: "https://github.com/CodingBySahil/My-CV",
      demoLink: "https://codingbysahil.github.io/sahil-cv1/",
    }
  ];
  
  
  

  return (
    <section id="projects" className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-4">Projects</h2>
    <div className="row g-4">
      {projectList.map((project, index) => (
        <div key={index} className="col-lg-3 col-md-4 col-sm-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-text">{project.description}</p>
              <a href={project.demoLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Projects;
