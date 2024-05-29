import React, { useEffect } from 'react'
import GitHubCalendar from 'react-github-calendar';

const GitHubStatus = () => {
  return (
    <section className="tech" id="tech">
        
        <h1 >My Github Contribution</h1>
        <div className="card1 cardcal">
        <GitHubCalendar username="Shubham18598" />
        </div>

        <p style={{textAlign:"center"}}>
            <br/>
            <img className="gitst" src="https://github-readme-stats.vercel.app/api?username=Shubham18598&show_icons=true&theme=default" /><br/>
            <img className="gitst" src="https://github-readme-streak-stats.herokuapp.com/?user=Shubham18598&theme=default" /><br/>
            <img className="gitst" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Shubham18598&theme=default" /><br/>
        </p>
    </section>
  )
}

export default GitHubStatus