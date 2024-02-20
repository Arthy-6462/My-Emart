import React, { useState } from 'react'
import{mobileData} from '../stores/data/mobiles';
import { Link } from 'react-router-dom';

const Mobiles = () => {
  const[selectProduct,setSelectProduct]=useState([]);
  const[currentPage,setCurrentPage]=useState(1);
  const recordPage=4;
  const lastIndex=currentPage*recordPage;
  const firstIndex=lastIndex-recordPage;
  const records=mobileData.slice(firstIndex,lastIndex);
  const nPage=Math.ceil(mobileData.length/recordPage);
  const number=[...Array(nPage+1).keys()].slice(1)

  // ================================pagination change===========================================
const prevPage=()=>{
  if(currentPage!==1){
    setCurrentPage(currentPage-1)

  }
}
function changeCPage(id){

  setCurrentPage(id)

}
const nextPage=()=>{
  if(currentPage!==nPage){
    setCurrentPage(currentPage+1)
  }
}

  const companyhandler=(mango)=>{
    if(selectProduct.includes(mango)){
      setSelectProduct(selectProduct.filter(item=>item!=mango))

    }else{
      setSelectProduct([...selectProduct,mango])
    } 
  }
  const filteredproduct=selectProduct.length===0 ?
  records:records.filter((orange)=>
    selectProduct.includes(orange.company))
  return (
    <>
    <div className='fullpage'>
      <div className='checkbox-main'>
    {records.map((phone)=>{
      return(
        <div className='checkbox_div'>
          <input type="checkbox" 
          checked={selectProduct.includes(phone.company)} 
          onChange={()=>companyhandler(phone.company)}/>
           <label>{phone.company}</label>
        </div>
      )

    })}
    </div>
    
    <div className='product_box'>
        {filteredproduct.map((mobile)=>{
            const{id,image,model,price}=mobile;
            return(
  <div key={id}className="card" style={{width: "17rem"}}>
  <img className="card-img-top" src={image} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{model}</h5>
    <h5 className="card-title">Price : {price} /-</h5>
    <Link to={`/mobiles/${id}`}><button>Moredetails</button></Link>
  </div>
</div>
            )

        })}



    </div>
    </div>
    {/* ========================page number===================================== */}
    
    <nav className='pagination mt-5 mb-5 d-flex justify-content-center align-items-center'>
      <li className='page-item'>
        <a className='page-link' href="#" onClick={prevPage}>Prev</a>
      </li>
{
  number.map((n,i)=>{
    <li className={`page-item ${currentPage===n? 'active':' '}`} key={i}>
      <a href="#" className='page-link' onClick={()=>changeCPage(n)}>{n}</a>
    </li>
  })
}
<li className=''page-item>
  <a  className='page-link'href="#" onClick={nextPage}>Next</a>
</li>
    </nav>
    </>
  )
}

export default Mobiles;