export interface Product{
    id:string
    name:string
    description:string
    price:number
}

export interface Product1{
    id:string
    name:string
    description:string
    price:number
    amount:number
}

export interface InputProps{
    label:string
    input:{
        id:string
        type:string
        min:string
        max:string
        step:string
        defaultValue:string
    }
}

export interface ContextProp{
    items:Product1[],
    totalAmount:number,
    addItem:(item:Product)=>void,
    removeItem:(id:string)=>void
}