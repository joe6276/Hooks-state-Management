import { Product1 } from "../Interfaces";
import React from "react";
const CartContext = React.createContext({
    items:[],
    totalAmount:0,
    addItem:(item:Product1)=>{},
    removeItem:(id:string)=>{}
})


export default CartContext