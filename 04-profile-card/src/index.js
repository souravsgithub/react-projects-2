import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="small-me.jpg" alt="Sourav Kumar" className="avatar" />;
}

function Intro() {
  return (
    <>
      <h1>Sourav Kumar</h1>
      <p>
        I am a 21 year old self-taught software developer specializing in
        full-stack development based out of Odisha, India. I am also a drop out
        and curious person to chase my dreams and have fun in the journey.
      </p>
    </>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="HTML/CSS" emote="💪" color="blue" />
      <Skill name="JavaScript" emote="🤙" color="yellow" />
      <Skill name="React" emote="👍" color="olive" />
      <Skill name="Express" emote="👌" color="red" />
      <Skill name="NodeJS" emote="👎" color="skyblue" />
      <Skill name="MongoDB" emote="👊" color="orangeRed" />
      <Skill name="Python" emote="🐍" color="magenta" />
    </div>
  );
}

function Skill(props) {
  return (
    <div style={{ backgroundColor: props.color }} className="skill">
      <span>{props.name}</span>
      <span>{props.emote}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
