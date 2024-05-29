import React from "react"
import profileImage from "../images/profile.png"

const HomePage = () => {
  return (
    <section className="home" id="home">
      <div className="social">
        <a href="https://github.com/Shubham18598" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            style={{ color: "#181717" }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/shubham-muddamwar/"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="bx bxl-linkedin"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            style={{ color: "#0A66C2" }}
          >
            <circle
              cx={4.983}
              cy={5.009}
              r={2.188}
              fill="currentColor"
            ></circle>
            <path
              d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
        <a
          href="sd.muddamwar98@gmail.com.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 256 193"
          >
            <path
              fill="#4285f4"
              d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"
            ></path>
            <path
              fill="#34a853"
              d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"
            ></path>
            <path
              fill="#ea4335"
              d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"
            ></path>
            <path
              fill="#fbbc04"
              d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"
            ></path>
            <path
              fill="#c5221f"
              d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"
            ></path>
          </svg>
        </a>
        <a href="tel:+919657004961" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
          >
            <path
              fill="#146bdb"
              d="M3.714 5.258C3.523 4 4.41 2.87 5.765 2.456a.99.99 0 0 1 1.214.598l.435 1.16a1 1 0 0 1-.26 1.088L5.86 6.487a.5.5 0 0 0-.152.47l.012.052l.031.13a7.3 7.3 0 0 0 .729 1.805a7.3 7.3 0 0 0 1.296 1.627l.04.036a.5.5 0 0 0 .482.103l1.673-.527a1 1 0 0 1 1.072.319l.792.961c.33.4.29.988-.089 1.341c-1.037.967-2.463 1.165-3.455.368a12.7 12.7 0 0 1-3.024-3.529a12.4 12.4 0 0 1-1.554-4.385m3.043 1.765l1.072-.984a2 2 0 0 0 .521-2.176l-.434-1.16A1.99 1.99 0 0 0 5.473 1.5c-1.683.515-3.034 2.024-2.748 3.909c.2 1.316.661 2.99 1.678 4.738a13.7 13.7 0 0 0 3.262 3.805c1.488 1.195 3.474.787 4.764-.415a1.98 1.98 0 0 0 .179-2.708l-.792-.962a2 2 0 0 0-2.144-.636l-1.389.437a6.6 6.6 0 0 1-.936-1.223a6.3 6.3 0 0 1-.59-1.421"
            ></path>
          </svg>
        </a>
      </div>
      <div className="home-img">
        <img src={profileImage} alt="" />
      </div>
      <div className="home-text">
        <span>Hello, I'm</span>
        <h1>Shubham Muddamwar</h1>
        <h2>
          <b>ReactJS Developer</b>
        </h2>
        <p>
          I love building websites. <br /> Passionate about developing creative
          & user friendly websites.
        </p>
        {/* <a href="#contact" className="btn">Contact Me</a>  */}
      </div>
    </section>
  )
}

export default HomePage
