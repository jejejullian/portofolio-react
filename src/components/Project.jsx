import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/project.css";

import projectsData from "../data/projects.json";

const Project = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <h2>Latest Projects</h2>
          {projectsData.map((project) => (
            <Col md={6} sm={12} key={project.id}>
              <div className="project-card">
                <div className="image-container">
                  <img src={project.image} alt="project" className={`project-image project${project.id}`} />
                </div>
                <div className="text-container">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <a href={project.link}>View Details</a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Project;
