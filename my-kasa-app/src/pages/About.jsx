import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import "../styles/Header.css";
import "../styles/Section.css";
import "../styles/Footer.css";
import "../styles/Collapse.css";

const About = () => {
  return (
    <div className="About">
      <Header />
      <main>
        <section className="section1">
          <img
            src={require("../assets/images/Image source 2.png")}
            alt="Section 1"
          />

          <Collapse topBar="Flabilité">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </Collapse>

          <Collapse topBar="Respect">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </Collapse>

          <Collapse topBar="Service">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </Collapse>

          <Collapse topBar="Sécurité">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </Collapse>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
