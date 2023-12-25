import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/about.css";

const About = () => {
  return (
    <section className="about">
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={6}>
            <div className="w-100 mt-10 d-flex justify-content-center">
              <div className="box-img"></div>
            </div>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <div className="mt-10 d-flex flex-column">
              <h2>About Me.</h2>
              <span className="tagline">Saya adalah Junior Front End Developer yang menguasai HTML, CSS, dan javascript, serta libraries dan framework yang ada. </span>
              <button onClick={() => console.log("connect")}>My CV</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
