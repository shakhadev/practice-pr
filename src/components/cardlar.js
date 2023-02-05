import React from "react";
import card from "./cards";
// import Card from "./cards"
const addCard = (props)=>{
    {props.info.map(item=>{
        <card name ={item.title} price ={item.amount}/>
    })}
}
export default addCard