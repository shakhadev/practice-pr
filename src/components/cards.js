import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const Card = (props) => {
  return (
    <div className="expense-item ">
      <ExpenseDate dates={props.date}/>
      <div className="expense-item__description">
        <h2>{props.name}</h2>
      </div>
      <div className="expense-item__price">
        <h2>{props.price}$</h2>
      </div>
    </div>
  );
};


// export default  jjj;
export default Card;
