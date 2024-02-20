import React from 'react'
import{computerData} from '../stores/data/computers'
import { useParams } from 'react-router-dom';

const Computersingle = () => {
    const{id}=useParams();
    const product=computerData.find((item)=>item.id===id)
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
                <h2>{product.model}</h2>
            </div>
            <div className="ind-price">
                <h3>{product.price}</h3>
            </div>
            <div className="ind-description">
                <h4>{product.description}</h4>
            </div>
            <button className='addtocartbtn'>Addtocart</button>

        </div>
    </div>
    </>
  )
}
export default Computersingle;