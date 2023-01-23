import { useState } from "react";
import "./styles.css";

export const Form = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [BMI, setBMI] = useState(0);
  const calculateBMI = () => {
    const currentHeight = height / 100;
    const BMI = weight / currentHeight ** 2;
    return Math.round(BMI);
  };
  const calculateBMIHandler = () => {
    const result = calculateBMI();
    setBMI(result);
  };
  const weightHandler = (event) => {
    setWeight(event.target.value);
  };
  const heightHandler = (event) => {
    setHeight(event.target.value);
  };
  return (
    <div className="formContainer">
      <input placeholder="Gewicht" value={weight} onChange={weightHandler} />
      <input placeholder="Größe" value={height} onChange={heightHandler} />
      <button onClick={calculateBMIHandler}>Berechnung</button>
      <div>Dein BMI: {BMI}</div>
    </div>
  );
};
