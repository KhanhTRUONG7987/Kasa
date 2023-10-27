import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Header.css";
import "../styles/Section.css";
import "../styles/Footer.css";

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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
