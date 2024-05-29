import "./App.css"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import About from "./components/About"
import HomePage from "./components/HomePage"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import GitHubStatus from "./components/GitHubStatus"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/github" element={<GitHubStatus />} />
      </Routes>
    </>
  )
}

export default App
