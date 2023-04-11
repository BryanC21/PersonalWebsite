import React from "react";
import "../styles/Projects.css";

function Projects() {
  return (
    <section id="projects" className="Projects">
      <h2>Projects</h2>
      <div className="Project">
        <h3>GitHub</h3>
        <p>A collection of projects I have worked on.</p>
        <a href="https://github.com/BryanC21/">View</a>
      </div>
      <div className="Project">
        <h3>File Host</h3>
        <p>A website created for image uploading and storage. Using React.js, Node.js, and Amazon Web Services</p>
        <a href="https://file-host.bcaldera.com/">Link</a>
      </div>
    </section>
  );
}

export default Projects;
