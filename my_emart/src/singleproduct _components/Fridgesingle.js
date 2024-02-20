import React from 'react';
import { useParams } from 'react-router-dom';
import { fridgeData } from '../stores/data/fridge';

const Fridgesingle = () => {
  const{id}=useParams();
  const product=fridgeData.find((item)=>item.id===id);

  return (
    <>
    
      <div className="ind-page">
        <div className="ind-image">
          <img src={product.image} alt="" />
        </div>
        <div className="ind-details">
          <div className="ind-company">
            <h1>{product.company}</h1>

          </div>
          <div className="ind-model">
<h2>{product.model}</h2>
          </div>
          <div className="ind-price">
<h3>{product.price}</h3>
          </div>
          <div className="ind-description">
            <h4>{product.description}</h4>

          </div>
          <button className='addtocartbtn'>addtocart</button>



        </div>




      </div>


    
    </>
  )
}

export default Fridgesingle