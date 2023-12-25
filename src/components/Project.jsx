import { Container, Row, Col } from "react-bootstrap";
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.png";
import "../assets/css/project.css";

const Project = () => {
  return (
    <>
      <section className="project">
        <Container>
          <Row>
            <h2>latest project</h2>
            <Col md={6} sm={12}>
              <div className="project-card">
                <div className="image-container">
                  <img src={project1} alt="project" className="project-image project1" />
                </div>
                <div className="text-container">
                  <h2>PT Niki Akurasi Persada</h2>
                  <p>Niki Akurasi Persada adalah perusahaan yang bergerak di bidang konstruksi. Niki Akurasi Persada berfokus pada pengembangan teknologi konstruksi dan menciptakan ruang berkualitas untuk bisnis.</p>
                  <a href="#">View Details</a>
                </div>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="project-card">
                <div className="image-container">
                  <img src={project2} alt="project" className="project-image project2" />
                </div>
                <div className="text-container">
                  <h2>PT Niki Akurasi Persada</h2>
                  <p>Niki Akurasi Persada adalah perusahaan yang bergerak di bidang konstruksi. Niki Akurasi Persada berfokus pada pengembangan teknologi konstruksi dan menciptakan ruang berkualitas untuk bisnis.</p>
                  <a href="#">View Details</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Project;
