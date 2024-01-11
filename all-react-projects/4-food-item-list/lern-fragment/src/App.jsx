import React, { useState } from "react";
import "./App.css";
import ErrorMsg from "./component/ErrorMsg";
import Foodltems from "./component/FoodItems";
import Container from "./component/Container";
import Foodinput from "./component/Foodinput";

function App() {

  let [foodItems, setFoodItems] = useState([]);

  //let foodItems = [];
  const onKeyDown = (event) => {
    if(event.key ==='Enter'){
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log(`Your Food is : ${newFoodItem}`)

    }
  };

  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <Foodinput handleKeyDown={onKeyDown}></Foodinput>
      <ErrorMsg items={foodItems}></ErrorMsg>
      <Foodltems items={foodItems}></Foodltems>
    </Container>
  );
}

export default App;
