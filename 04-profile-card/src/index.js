import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML/CSS",
    label: "Advanced",
    color: "blue",
  },
  {
    skill: "JavaScript",
    label: "Intermediate",
    color: "yellow",
  },
  {
    skill: "React",
    label: "Beginner",
    color: "olive",
  },
  {
    skill: "Express",
    label: "Intermediate",
    color: "red",
  },
  {
    skill: "Node JS",
    label: "Intermediate",
    color: "skyblue",
  },
  {
    skill: "MongoDB",
    label: "Intermediate",
    color: "orangered",
  },
  {
    skill: "Python",
    label: "Beginner",
    color: "magenta",
  },
];

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
  const skillList = skills.map((item) => (
    <Skill
      name={item.skill}
      emote={
        item.label === "Advanced"
          ? "💪"
          : item.label === "Intermediate"
          ? "👍"
          : "😐"
      }
      color={item.color}
    />
  ));
  return <div className="skill-list">{skillList}</div>;
}

function Skill({ name, emote, color }) {
  return (
    <div style={{ backgroundColor: color }} className="skill">
      <span>{name}</span>
      <span>{emote}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
