import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/banner.css";
import headerImg from "../assets/img/header-img.png";
const Banner = () => {
  return (
    <section className="banner">
      <Container fluid>
        <div className="row-custom">
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <div className="mt-10">
                <span className="tagline">Hello I'm Julian</span>
                <h1>Junior Frontend</h1>
                <h3>Developer</h3>
              </div>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <div className="mt-10">
                <img src={headerImg} alt="Header Img" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
