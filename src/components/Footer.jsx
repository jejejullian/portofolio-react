import { Navbar, Container, Row, Col } from "react-bootstrap";
import "../assets/css/footer.css";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <Navbar.Brand href="#home" className="logo" style={{ fontSize: "2rem", color: "#fff", fontWeight: "600" }}>
              PORTO
            </Navbar.Brand>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/juliannurfadzlin/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a href="https://github.com/jejejullian" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="github" />
              </a>
              <a href="https://www.instagram.com/jfdzln/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="instagram" />
              </a>
            </div>
            <p>Copyright 2023. Julian (jeje)</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
