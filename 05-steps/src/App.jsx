import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  function goNext() {
    step < 3 && setStep((prevStep) => prevStep + 1);
  }
  function goPrev() {
    step > 1 && setStep((prevStep) => prevStep - 1);
  }
  const [step, setStep] = useState(1);
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 && "active"}>1</div>
        <div className={step >= 2 && "active"}>2</div>
        <div className={step >= 3 && "active"}>3</div>
      </div>

      <p className="message">{`Step ${step}: ${messages[step - 1]}`}</p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={goPrev}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={goNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
