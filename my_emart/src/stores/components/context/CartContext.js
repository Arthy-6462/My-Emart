import { createContext,useContext,useEffect,useState } from "react";

const CartContext =createContext()
export const ProviderCart =({children})=>{
    const getData=()=>{ 
   const lcalstoragedata= localStorage.getItem('ecommerce')
   if(lcalstoragedata){
    return JSON.parse(lcalstoragedata)
   }
   else{
    return [];
   }
}
    const [cartItem,setCartItem]=useState(getData());
    const addToCart =(item)=>{
        setCartItem([...cartItem,item])
    }
    const removeFromCart=(item)=>{
        setCartItem(cartItem.filter((apple)=>apple!==item))

    }
    useEffect(()=>{
        localStorage.setItem('ecommerce',JSON.stringify(cartItem))

    },[cartItem])
    return(
        <CartContext.Provider value={{cartItem,addToCart,removeFromCart}}>
        {children}
    </CartContext.Provider>
    )
  
}
export const useCart=()=>{
    return useContext(CartContext);
}