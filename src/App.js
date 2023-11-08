import "./App.css";
import React, { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  console.log(Math.floor(Math.random() * animals.length));
  return animals[Math.floor(Math.random() * animals.length)];
}
console.log(getRandomAnimal());
function App() {
  const [animals, SetAnimals] = useState([]);
  function handleClick() {
    SetAnimals([...animals, getRandomAnimal()]);
    console.log(animals);
  }
  const renderAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });
  console.log(renderAnimals);
  return (
    <div className="app">
      <button onClick={handleClick}>click me</button>
      <h1>{renderAnimals}</h1>
    </div>
  );
}

export default App;
