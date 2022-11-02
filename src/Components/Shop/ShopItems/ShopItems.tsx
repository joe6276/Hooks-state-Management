import React from "react";
import { Product } from "../../../Interfaces";
import { Shopitem } from "../ShopItem/Shopitem";
import classes from './shopItems.module.css'
const DummyItem:Product[]=[
{
    id: 'm1',
    name: 'Laptop',
    description: 'Dell Laptop',
    price: 220.99,
  },
  {
    id: 'm2',
    name: 'Desktop',
    description: 'Dell desktop',
    price: 160.5,
  },
  {
    id: 'm3',
    name: 'Mouse',
    description: 'Logitech mouse',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Keyboard',
    description: 'Best KeyBoard',
    price: 18.99,
  },
]
export const ShopItems:React.FC=()=>{
    const productList = DummyItem.map((item) => (
    <Shopitem
      id={item.id}
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));
    return (
        <>
       <section className={classes.product}>
    
        <ul>{productList}</ul>
    </section>
        </>
    )
}