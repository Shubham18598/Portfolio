import React from "react"
import { NavLink } from "react-router-dom"
import MyShop from "../images/MyShop.png"
import Bewakoof from "../images/Bewakoof.png"
import expense from "../images/expense.png"
import glamour from "../images/glamour.png"
import coutdownTimer from "../images/coutdownTimer.png"
import taskMan from "../images/taskMan.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
const Projects = () => {
  const AllProjects = [
    {
      name: "MyShop",
      img: MyShop,
      details: `MyShop is a comprehensive e-commerce website designed to provide a seamless and enjoyable shopping experience. Our platform offers a wide range of high-quality products across various categories, including fashion, electronics, home goods, and beauty products..`,
      tech: `ReactJS | JavaScript | HTML5 | CSS | BootStrap | Node.js | Express | MongoDB`,
      gitHubLink: "https://github.com/Shubham18598/MyShop",
      deployedLink: "https://github.com/Shubham18598/MyShop",
    },
    {
      name: "glamour.com | Clone",
      img: glamour,
      details: `Glamour is an Indian e-commerce company that sells cosmetics and personal care products. Products are made with a majority of natural ingredients and extracts and are free of parabens, phthalates, alcohol and sulfates.`,
      tech: `ReactJS | JavaScript | HTML5 | CSS | BootStrap | Node.js | Express | MongoDB`,
      gitHubLink: "https://github.com/Shubham18598/Glamour",
      deployedLink: "https://glamour-ashy.vercel.app/",
    },
    {
      name: "Expense Tracker",
      img: expense,
      details: `This is a simple Expense Tracker application built using React. It allows users to add income and expense transactions, view the transaction history, filter transactions by type, and see the current balance, total income, and total expenses.`,
      tech: `React | HTML5 | CSS | JavaScript | BootStrap`,
      gitHubLink: "https://github.com/Shubham18598/expense-tracker-new",
      deployedLink: "https://expense-tracker-assign3.netlify.app/",
    },
    {
      name: "Bewakoof.com | Clone",
      img: Bewakoof,
      details: `Bewakoof is an Online Shopping site for Men
    and Women Clothing. Shop from a wide range of T-shirts,
    Mobile Covers, Accessories and more at the best prices.`,
      tech: `HTML5 | CSS | JavaScript | BootStrap`,
      gitHubLink: "https://github.com/Shubham18598/Bewakoof-clone",
      deployedLink: "https://stellar-sundae-0a820a.netlify.app/",
    },
    {
      name: "Task Management",
      img: taskMan,
      details: `This is a task management application built with React and Redux. It allows users to add, edit, delete, and filter tasks. Tasks can be marked as pending, in progress, or completed.`,
      tech: `React | Redux | React-Redux | HTML5 | CSS | JavaScript`,
      gitHubLink: "https://github.com/Shubham18598/task_management",
      deployedLink: "https://task-management-assign3.netlify.app/",
    },
    {
      name: "coutdown Timer",
      img: coutdownTimer,
      details: `This application is a basic countdown timer implemented using React. It allows users to start, pause, reset the timer, and capture time intervals. The timer displays hours, minutes, seconds, and milliseconds, and users can capture the time whenever they want during the countdown.`,
      tech: `React | HTML5 | CSS | JavaScript | BootStrap`,
      gitHubLink: "https://github.com/Shubham18598/countdown-timer",
      deployedLink: "https://countdown-timer00.netlify.app/",
    },
  ]
  return (
    <div>
      <section class="portfolio" id="portfolio">
        <NavLink name="projects"></NavLink>
        <div id="container4">
          <h1 class="heading1">Projects</h1>
          <div id="box">
            {AllProjects.map((p) => (
              <div>
                <img src={p.img} />
                <h3>{p.name}</h3>
                <h5>{p.details}</h5>
                <br />
                <p>{p.tech} </p>
                <a href={p.gitHubLink} target="_blank">
                  <button class="button">
                    CODE <FontAwesomeIcon icon={faGithub} />
                  </button>
                </a>
                <a href={p.deployedLink} target="_blank">
                  <button class="button">
                    LIVE <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
