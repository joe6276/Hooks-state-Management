import React from "react";
import { ShopItems } from "./ShopItems/ShopItems";
import { ShopSummary } from "./ShopSummary/ShopSummary";

export const Shop:React.FC=()=>{
    return(
        <>
        <ShopSummary/>
        <ShopItems/>
        </>
    )
}