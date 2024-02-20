import React from 'react'
 import { useCart } from './components/context/CartContext';
 import { useState } from 'react';
 
const UserCart = () => {
    const {cartItem,removeFromCart}=useCart();
    const[count,setCount]=useState(1);
    const handledecrement=()=>{
        if(count>1){
        setCount(count-1);
    }else{
        setCount(1);
    }
    }
    const handleincrement=()=>{
        if(count<10){
            setCount(count+1);
        }
        else{
            alert('limited stocks only available..not more than 10')

            setCount(10)
        }
    }
  return (
    <div className='main_usercart'>
        {cartItem.map((item)=>{
            return(
                <div className="container mb-3">
                    <div className="row ">
                    {/* image section */}

                    <div className="col-3 img_sec d-flex align-items-center justify-content-start mt-3">
                        <div>
                     <img src={item.image} alt="" width={'40%'}/>
                    </div>
                    </div>
                    {/* detail section */}

                    <div className="col-4 detail_sec d-flex justify-content-start align-items-center">
                        <div>
                        <h3>{item.product}</h3>
                    <h3>{item.model}</h3>

                        </div>
                    
                    </div>
                    {/* price details */}

                    <div className="col-3 price_detail d-flex justify-content-start align-items-center ">
                        <div>
                    <h2>Price:{item.price*count}</h2>
                    <button onClick={handleincrement}>+</button>{count}<button onClick={handledecrement}>-</button>
                    </div>
                    </div>

                    
                    {/* remove item */}

                    <div className="col-2 d-flex delete justify-content-start align-items-center">
                    <div>
                        <button className='btn btn-warning removebtn' onClick={()=>removeFromCart(item)}>Remove item</button>
                        <h2 className='del'>X</h2>
                    </div>
                    </div>
                    </div>
                </div>
            )
        })}
        
    </div>
  )
}
export default UserCart;