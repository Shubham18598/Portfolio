import React from "react"
import codingImage from "../images/coding.gif"
import Resume from "../images/Shubham_Muddamwar_Resume.pdf"

const About = () => {
  return (
    <section className="about" id="about">
      <div className="heading">
        <h2>About Me</h2>
      </div>

      <div className="about-container">
        <div className="about-img">
          <img src={codingImage}  alt="" />
        </div>
        <div className="about-text">
          <h5>
            Passionate Full Stack Web Developer specializing in the MERN stack,
            with a strong focus on front-end development using React. Skilled in
            building dynamic, responsive UIs and delivering seamless user
            experiences. Proficient in modern JavaScript, HTML, CSS, and state
            management with Redux. Experienced in API integration, performance
            optimization, and creating reusable components. Always eager to
            learn new technologies and improve my craft. Dedicated to
            collaborative development and effective version control with Git.
          </h5>
          <a
            href={Resume}
            value="download"
            target="_blank"
            className="btn"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
