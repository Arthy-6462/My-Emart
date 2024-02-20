import React from 'react'
import {computerData} from '../stores/data/computers';
import { Link } from 'react-router-dom';

const Computers = () => {
  return (
    <div className='product_box'>
      {computerData.map((eachcomputer)=>{
        const{id,image,model,price}=eachcomputer;
        return(
          <div className="card" key={id} style={{width: "17rem"}}>
  <img className="card-img-top" src={image} style={{height:'80%'}}alt="Card image cap"/>
  <div className="card-body">
  <h5 className="card-title">{model}</h5>
    <h5 className="card-title">{price}</h5>
    <Link to={`/computers/${id}`}><button>Moredetails</button></Link>
  </div>
</div>
        )

      })}

      
    </div>
  )
}

export default Computers