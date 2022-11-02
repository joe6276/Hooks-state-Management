import React from "react";
import classes  from './Modal.module.css'
interface ModalProps{
    children:React.ReactNode
}
export const Modals:React.FC<ModalProps>=({children})=>{
    return(
        <>
        <div className={classes.backdrop}></div>
        <div className={classes.modal}>
            <div className={classes.content}>{children}</div>
        </div>
        </>
    )
}