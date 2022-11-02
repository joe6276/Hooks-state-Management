import React from "react";
import classes from './HeaderCardButton.module.css'
import { CartIcon } from "../../assets/Icons/CartIcon";
export const HeaderCardButton :React.FC =()=>{
    return(
        <>
        <button className={classes.button}>
            <span className={classes.icon}>{ <CartIcon/>}</span>
            <span>Your Cart</span>
            <span className={classes.badge} >3</span>
        </button>
        </>
    )
}