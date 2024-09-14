import React, { useState } from 'react'

const UseStateExample = () => {

  /*
  const [brand, setBrand] = useState("Ferrari");
  const [model, setModel] = useState("Roma");
  const [year, setYear] = useState("2023");
  const [color, setColor] = useState("Red");
  */
 // we can create an object with the following attributes instead of creating seperate state variables
  const [car, setCar] = useState({
    brand: "Ferrari",
    color: "Red",
    model: "Roma",
    color: "Red"
  });

  const [count, setCount] = useState(0);

  const changeColor = () => {
    setCar((car) => {
        return {...car, color: "Blue"}
    })
  };

  const increaseCount = () => {
    // despite there being four setCounts, it'll only increase the count by 1
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    
    // by creating an arrow function inside setCount, we are able to manipulate the count variable multiple times within the function
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }
  return (
    <div>
      <div>
        <h1>My {car.brand} </h1>
        <h2>
          It is a {car.color} {car.model} from {car.year}
        </h2>
        <button onClick={changeColor}>Blue</button>
      </div>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={increaseCount}>Increase Count</button>
      </div>
    </div>
  );
}

export default UseStateExample