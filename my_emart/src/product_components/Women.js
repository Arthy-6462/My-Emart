import React from 'react';
import {womanData} from '../stores/data/woman';

const Women = () => {
  return (
    <div className='product_box'>
    {womanData.map((eachitem)=>{
      const{id,model,price,image}=eachitem;
      return(
        <div className="card" key={id}style={{width: '17rem'}}>
<img className="card-img-top" style={{height:'80%',padding:"5px"}}src={image} alt="Card image cap"/>
<div className="card-body">
  <h5 className="card-title">{model}</h5>
  <h5 className="card-title">{price}</h5>
  <a href="#" className="btn btn-primary">add to cart</a>
</div>
</div>
      )
    })}

  </div>
  )
}

export default Women