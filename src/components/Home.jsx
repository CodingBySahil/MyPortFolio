import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <section id="home" className="py-5 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h1 className="display-4 mb-3 text-center">Hi, I'm <b>MUHAMMAD SAHIL</b></h1>
            <p className="lead">I'm a passionate front-end developer with expertise in HTML, CSS, JavaScript, and React.</p>
            <p className="lead">I enjoy creating responsive and interactive web applications that deliver a great user experience.</p>
            <p className="lead">Currently exploring new technologies and frameworks to expand my skill set.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
