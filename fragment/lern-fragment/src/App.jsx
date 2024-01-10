import React from "react";
import "./App.css";
import ErrorMsg from "./component/ErrorMsg";
import Foodltems from "./component/FoodItems";

function App() {
  let foodItems = ["Dal-roti","Green Vegetable","Roti","Fruits", "Salad", "Milk"];
  //let foodItems = [];

  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
      <ErrorMsg items = {foodItems}></ErrorMsg>
      <Foodltems items = {foodItems}></Foodltems>
    </React.Fragment>
  );
}

export default App;
