import React from "react";
import { InputProps } from "../Interfaces";
import classes from './Input.module.css'
export const Input:React.FC<InputProps>=({input,label})=>{
    return(
        <>
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
        </>
    )
}