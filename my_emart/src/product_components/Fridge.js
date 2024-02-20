import React from 'react'
import {fridgeData} from '../stores/data/fridge';
import { Link } from 'react-router-dom';

const Fridge = () => {
  return (
    <div className='product_box'>
      {fridgeData.map((eachitem)=>{
        const{id,model,image,price}=eachitem;
        return(
          <div className="card" style={{width: '17rem'}}>
  <img className="card-img-top" src={image} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{model}</h5>
    <h5 className="card-title">{price}</h5>
    <Link to={`/fridge/${id}`}><button>moredetails</button></Link>
  </div>
</div>
        )
      })}

    </div>
  )
}

export default Fridge