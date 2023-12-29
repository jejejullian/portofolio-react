import { Container, Row, Col } from "react-bootstrap";
import project1Image from "../assets/img/project1.jpg";
import project2Image from "../assets/img/project2.jpg";
import project3Image from "../assets/img/project3.jpg";
import "../assets/css/project.css";

const projectsData = [
  {
    id: 1,
    title: "PT Niki Akurasi Persada",
    description: "HTML, Bootstrap, Javascript",
    link: "https://www.nikiakurasipersada.com/",
    image: project1Image,
  },
  {
    id: 2,
    title: "Web Inventory SMK Yadika",
    description: "PHP, Bootstrap, Javascript",
    link: "https://inventory-yadika.000webhostapp.com/login.php",
    image: project2Image,
  },
  {
    id: 3,
    title: "Web Store Simple",
    description: "HTML, Bootstrap, Javascript",
    link: "https://wickedstich.netlify.app/",
    image: project3Image,
  },
];

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
