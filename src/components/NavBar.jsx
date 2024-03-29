import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { BrowserRouter as Router } from "react-router-dom";
import "../assets/css/navbar.css";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
      <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="#home" className="logo" style={{ fontSize: "2rem", color: "#fff", fontWeight: "600" }}>
              PORTO
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>
                  Home
                </Nav.Link>
                <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>
                  Skills
                </Nav.Link>
                <Nav.Link href="#project" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>
                  Projects
                </Nav.Link>
              </Nav>
              <span className="navbar-text">
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
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Router>
    </>
  );
};

export default NavBar;
