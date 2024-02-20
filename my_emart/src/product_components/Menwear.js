import React from 'react'
import {menData} from '../stores/data/men';

const Menwear = () => {
  return (
    <div className='product_box'>
    {menData.map((eachitem)=>{
      const{id,model,price,image}=eachitem;
      return(
        <div class="card" key={id}style={{width: '17rem'}}>
<img class="card-img-top" style={{height:'80%',padding:"5px"}}src={image} alt="Card image cap"/>
<div class="card-body">
  <h5 class="card-title">{model}</h5>
  <h5 class="card-title">{price}</h5>
  <a href="#" class="btn btn-primary">add to cart</a>
</div>
</div>
      )
    })}

  </div>
  )
}

export default Menwear