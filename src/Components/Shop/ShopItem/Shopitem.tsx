import React from "react";
import { Product } from "../../../Interfaces";
import { ShopForm } from "../ShopForm/ShopForm";
import classes from './Shopitem.module.css'

export const Shopitem:React.FC<Product>=({id,name,description,price})=>{
     const prices = `$${price.toFixed(2)}`;

  return (
    <li className={classes.product}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{prices}</div>
      </div>
      <div>
        <ShopForm id={id} />
      </div>
    </li>
  );
}