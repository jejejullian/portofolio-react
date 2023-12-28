import { Col } from "react-bootstrap";
import "../assets/css/skills.css";
import html from "../assets/icon/html5.svg";
import css from "../assets/icon/css3-alt.svg";
import bootstrap from "../assets/icon/bootstrap.svg";
import tailwind from "../assets/icon/tailwind.svg";
import javascript from "../assets/icon/js.svg";
import php from "../assets/icon/php.svg";
import nodejs from "../assets/icon/node-js.svg";
import reactjs from "../assets/icon/react.svg";
import git from "../assets/icon/git-alt.svg";

const Skills = () => {
  return (
    <>
      <section className="skills" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Skills</h2>
              <div className="bar">
                <Col>
                  <div className="icon-bar">
                    <img src={html} alt="icon bar" />
                    <img src={css} alt="icon bar" />
                    <img src={bootstrap} alt="icon bar" />
                    <div className="progress-bar bar1">
                      <div className="labels">
                        <span>Beginner</span>
                        <span>Intermediate</span>
                        <span>Advanced</span>
                      </div>
                    </div>
                  </div>
                  <div className="icon-bar">
                    <img src={tailwind} alt="icon bar" />
                    <img src={javascript} alt="icon bar" />
                    <img src={php} alt="icon bar" />
                    <div className="progress-bar bar2">
                      <div className="labels">
                        <span>Beginner</span>
                        <span>Intermediate</span>
                        <span>Advanced</span>
                      </div>
                    </div>
                  </div>
                  <div className="icon-bar">
                    <img src={nodejs} alt="icon bar" />
                    <img src={reactjs} alt="icon bar" />
                    <img src={git} alt="icon bar" />
                    <div className="progress-bar bar3">
                      <div className="labels">
                        <span>Beginner</span>
                        <span>Intermediate</span>
                        <span>Advanced</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
