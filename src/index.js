import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



function App(props) {
  return (
    <div className="card">

      <Avatar image='avatar/me1.jpg' name="HOUSSAM DAHBI" />
      
      <div className="data">
        <Intro
          name="HOUSSAM DAHBI"
          description="Junior web developer experienced in front-end development (HTML, CSS, JavaScript) and back-end development (PHP, Laravel). Skilled in MERN stack ." 
          />

        <SkillList />

      </div>
    </div>
  )
}
function Skills(props){
  return(
    <div className="skill" style={{backgroundColor : `${props.color}`}}>
      <span >{props.skills}</span>
      <span>{props.emoji}</span>
    </div>
  )
}


function SkillList(props) {
  return (
    <div className='skill-list'>
      <Skills skills="React" emoji="💪" color="blue" />
      <Skills skills="HTML+CSS" emoji="💪" color="orange" />
      <Skills skills="JavaScript" emoji="💪" color="yellow" />
      <Skills skills="Laravel" emoji="👶" color="orangered" />
      
    </div>
  )
}


function Avatar(props) {
  return (
    <div>
      <img src={props.image} alt={props.name} className='avatar' />
    </div>    
  )
}  

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>    
  )
}  


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

