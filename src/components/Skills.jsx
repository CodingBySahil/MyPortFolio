import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="py-5 text-center">
      <div className="container">
        <h2 className="mb-4">Skills</h2>
        <div className="row">
          <div className="col-md-6">
            <h3>Core Skills</h3>
            <ul className="skills-list">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3>Additional Skills</h3>
            <ul className="skills-list">
              <li>Bootstrap</li>
              <li>Responsive Web Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
