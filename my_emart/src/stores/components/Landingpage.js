import React from 'react'
import {Link, useNavigate } from 'react-router-dom';
export const data=[{

    "id": 1,
    "title": "mobiles",
    "image": "/assets/Mobiles/1.jpg",    
},
{

    "id": 2,
    "title": "Computers",
    "image": "/assets/Computers/1.jpg",    
},
{

    "id": 3,
    "title": "Fridge",
    "image": "/assets/fridge/1.jpg",    
},
{

    "id": 4,
    "title": "Furniture",
    "image": "/assets/furniture/1.jpg",    
},
{

    "id": 5,
    "title": "Kitchen",
    "image": "/assets/Kitchen/1.jpg",    
},
{

    "id": 6,
    "title": "Watch",
    "image": "/assets/Watch/1.png",    
},
{

    "id": 7,
    "title": "Ac",
    "image": "/assets/Ac/1.jpg",    
},
{

    "id": 8,
    "title": "Men",
    "image": "/assets/Menwear/1.jpg",    
},
{

    "id": 9,
    "title": "Woman",
    "image": "/assets/Woman/1.jpg",    
},
{

    "id": 10,
    "title": "Books",
    "image": "/assets/Books/1.jpg",    
},
]
const Landingpage = () => {
    return(
        <div className="product_details">
        
           
           
        <div className='  d-flex flex-wrap gap-2 product_landingsec'>
          {data.map((eachItem)=>(
            <div className="card" style={{'width': '15rem'}}key={eachItem.id}>
            <img className="card-img-top" style={{height:'80%',padding:'5px'}} src={eachItem.image}alt="Card image cap"/>
            <div className="card-body">
            <Link to={`/product/${eachItem.title}`} className="btn btn-primary">{eachItem.title}</Link> 
            </div>
          </div>
          ))}  
         </div>
   
        
        </div>  
    ) 
}
export default Landingpage;
