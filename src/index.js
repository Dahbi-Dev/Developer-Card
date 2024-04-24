import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Laravel",
    level: "beginner",
    color: "#FF3B00"
  }
];




function SkillList() {

  return (
    <div className='skill-list'>
      {skills.map((skill) =>
        <Skills skills={skill.skill}  color={skill.color} level={skill.level}   /> )}

    </div>
  )
}

function Skills({ skills, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color}}  >
      <span>{skills}</span>
      <span>{level === "beginner" && '👶'}</span>
      <span>{level === "intermediate" && '👍'}</span>
      <span>{level === "advanced" && '💪'}</span>
    </div>
  )
}


function App({key}) {
  return (
    <div className="card">

      <Avatar image='avatar/me1.jpg' name="HOUSSAM DAHBI" />

      <div className="data">
        <Intro
          name="HOUSSAM DAHBI"
          description="Junior web developer experienced in front-end development (HTML, CSS, JavaScript) and back-end development (PHP, Laravel). Skilled in MERN stack ."
        />

        <SkillList  />

      </div>
    </div>
  )
}
function Intro({name, description}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}


function Avatar({name, image}) {
  return (
    <div>
      <img src={image} alt={name} className='avatar' />
    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

