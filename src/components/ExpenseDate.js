import React from "react";

const ExpenseDate = (props) => {
  const day = props.dates.getDate();
  const year = props.dates.getFullYear();
  const month = props.dates.toLocalString("en-Us", { month: "long" });
  return <div className="ExpenseDate">
    <div className="ExpenseDate_month">{month}</div>
    <div className="ExpenseDate_day">{day}</div>
    <div className="ExpenseDate_year">{year}</div>
  </div>;
};

export default ExpenseDate;   
