import React, { useState } from 'react'
import {mobileData} from '../stores/data/mobiles';
 
import { useParams } from 'react-router-dom';
 import {useCart} from '../stores/components/context/CartContext'
 
const Mobilesingle = () => {
    const{id}=useParams();
   const {addToCart}=useCart()
   const[add,setAdd]=useState('Addtocart');
 
    const product=mobileData.find((item)=>item.id===id)
    // console.log(id)
  return (
    <>
    <div className='ind-page'>
        <div className='ind-image'>
<img src={product.image} alt="" />

        </div>
        <div className="ind-details">
<div className="ind-company">
    <h2>{product.company}</h2>
</div>
<div className="ind-model">
    <h3>{product.model}</h3>
</div>
<div className="ind-price">
    <h4>Price:{product.price}</h4>
</div>
<div className="ind-description">
    <p>{product.description}</p>
</div>
<button className='addtocartbtn' 
onClick={()=>{addToCart(product)
setAdd("Added To Cart")} }
>{add}</button>
        </div>
    </div>
    </>
  )
}

export default Mobilesingle;