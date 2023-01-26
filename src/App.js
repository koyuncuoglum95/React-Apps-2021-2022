import './App.css';
import React, { useState } from 'react';

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");

  const bmiNormalHandler = () => {
  const heightConverter = parseFloat(height);
  const weightConverter = parseInt(weight);
  const bmi = (weightConverter) / (Math.pow(heightConverter,2));
  const bmiConverter = parseFloat(bmi).toFixed(2);
  setResult(bmiConverter);
  console.log(bmiConverter);
  var span = document.querySelector('span');
  if(bmiConverter < 18.5 ) {
    span.className="orange";
  }
  else if(bmiConverter > 18.5 && bmiConverter < 26 ){
    span.className="green";
  }
  else if(bmiConverter > 24 && bmiConverter < 31) {
    span.className="orangered";
  }
  else {
    span.className= "red";
  }
  }

  return (
    <div className="App">
      <h1 id="bmiTitle">BMI Calculator</h1>
      <label for="Weight" id="lblWeight">Weight(in kg)</label>
      <input type="text" id="weight" placeholder="Enter weight" onChange={e => setWeight(e.target.value)}/>
      <label for="Height" id="lblHeight">Height(in cm)</label>
      <input type="text" id="height" placeholder="Enter height" onChange={e => setHeight(e.target.value)}/>
      <button id="bmiCalculate" onClick={bmiNormalHandler}>Calculate</button>
      <label id="nrmResult">Your BMI: <span>{result}</span></label>


      <div id="underweight">
        <p>UnderWeight Less than 18.5</p>
      </div>

      <div id="normalweight">
        <p>Normal Weight 18.5-25</p>
      </div>
      <div id="overweight">
        <p>Overweight</p>
        <p id="up1">25-30</p>
      </div>
      <div id="obese">
        <p>Obese More than 30</p>
      </div>
    
    </div>
  );
}

export default App;
