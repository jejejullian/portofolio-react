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
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
          <Container>
            <div className="customNavbar">
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
                  <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>
                    Projects
                  </Nav.Link>
                </Nav>
                <span className="navbar-text">
                  <div className="social-icon">
                    <a href="#">
                      <img src={navIcon1} alt="" />
                    </a>
                    <a href="#">
                      <img src={navIcon2} alt="" />
                    </a>
                    <a href="#">
                      <img src={navIcon3} alt="" />
                    </a>
                  </div>
                </span>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
      </Router>
    </>
  );
};

export default NavBar;
