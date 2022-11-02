import React, { useReducer } from "react";
import { Product1 } from "../Interfaces";
import CartContext from "./CreateContext";
interface CartpProps{
    children:React.ReactNode
}

const defaultCartState = {
  items: [],
  totalAmount: 0
};
const cartReducer = (state:any, action:any) => {
    return defaultCartState
}

export const CartProvider:React.FC<CartpProps>=({children})=>{

    const [cartState, dispatchCartAction]=useReducer(cartReducer, defaultCartState)
     const additemtoCart=(item:Product1)=>{
        dispatchCartAction({type:'ADD', item:item})
    }

       const removeitemToCart=(id:string)=>{
        dispatchCartAction({type:'REMOVE', id:id})
    }
    const itemValues={
    items:cartState.items,
    totalAmount:cartState.totalAmount,
    addItem:additemtoCart,
    removeItem:(id:string)=>{}
} 
    return(
       <CartContext.Provider value={itemValues}>
            {children}
       </CartContext.Provider>
    )
           
}