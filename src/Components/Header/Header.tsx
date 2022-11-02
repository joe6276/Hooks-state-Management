import React from "react";
import classes from './header.module.css'
import image from '../../assets/laptop.jpg'
import { HeaderCardButton } from "../HeaderCardButton/HeaderCardButton";
export const Header:React.FC=()=>{
    return(
        <>
        <header className={classes.header}>
            <h1>React IT Shop</h1>
            <HeaderCardButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={image} alt="background" />
        </div>
        
        </>
    )
}