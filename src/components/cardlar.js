import React from "react";
import Card from "./cards";
// import Card from "./cards"
const AddCard = (props)=>{
    {props.info.map(item=>{
        <Card name ={item.title} price ={item.amount}/>
    })}
}
export default AddCard