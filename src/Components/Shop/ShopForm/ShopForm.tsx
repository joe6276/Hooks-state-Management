import React from "react";
import { Input } from "../../../UI/Input";
import classes from './ShopForm.module.css'
export const ShopForm:React.FC<{id:string}>=({id})=>{
    return(
        <>
    <form className={classes.form}>
      <Input
        label='Amount'
        input={{
          id:`amount_' ${id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
        </>
    )
}