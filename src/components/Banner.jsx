import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/banner.css";
import headerImg from "../assets/img/header-img.png";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="bx-content align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="mt-10">
              <span className="tagline">Hello I'm Julian</span>
              <h1>Junior Frontend</h1>
              <h3>Developer</h3>
            </div>
          </Col>
          <Col className="bx-img" xs={12} md={6} xl={5}>
            <div className="d-flex justify-content-center">
              <img src={headerImg} className="img-fluid mt-10" alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
