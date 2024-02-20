import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {useCart} from './context/CartContext'
import { useState } from 'react'
import {User,useAuth0} from '@auth0/auth0-react';
 
const Header = () => {
  const searchItems=[
    {id:1,searchName:'Mobile',path1:'/mobiles'},
    {id:2,searchName:'Computers',path1:'/computers'},
    {id:3,seacrhName:'Ac',path1:'/ac'}

]
const[search,setSearch]=useState();
const[time,setTime]=useState('No items found')
 const[displayed,setDisplayed]=useState("Category",true)
 const[close,setclose]=useState(true)

const dispalyheading=()=>{ 
 const display=document.querySelector('.subHead');
 const display1=document.querySelector("#display");
 if(display1){
   display.classList.add("top") 
   setDisplayed(false)
   setclose("X",true)
 } 
}
const closeheading=()=>{
  const close=document.querySelector('.subHead');
  const close1=document.querySelector("#close");
  if(close1){
    close.classList.remove("top")
    setDisplayed("Category",true)
    setclose(false)


  
  
  }

}
 
 const{cartItem}=useCart()
 const {loginWithRedirect,logout,isAuthenticated,user}=useAuth0();
  return (
    <> 
     {/*Heder  */}
<section className='header_section d-flex justify-content-center align-items-center w-100'>
<nav className="navbar navbarr navbar-expand-lg navbar-light">
<Link to="/" className='logo_name'  >Arthy</Link>
  
 
  <form className="d-flex my-2 my-lg-0 ">
    
      <input className="form-control mr-sm-2 ms-5 mx-3" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" value={search} onChange={(e)=>setSearch(e.target.value)}>Search</button>
      {/* <div className='searchItems'>
        { 
        (search==0||!searchItems.filter(items=>items.searchName.toLowerCase().includes(search)))?
        <p>items not found </p>:searchItems.filter(items=>items.searchName.toLowerCase().includes(search)).map(items=>{
          return(
            <div key={items.id}>
              <Link to={items.path1}>{items.searchName}</Link>
            </div>
          )
        })
        } 

      </div> */}
      {/* <div className="serItems">

{
(search == 0 || !searchItems.filter(items=>items.searchName.toLowerCase().includes(search))) ?
<p style={{textAlign:"center"}}>{time}</p>:
searchItems.filter(items=>items.searc                                                                                                                                                                                                                          hName.toLowerCase().includes(search)).map(items=>{
return(

<div className="serchItems1" key={items.id}>
  <Link to={items.path1} style={{color:"white"}}>{items.searchName}</Link>

</div>
)})}
</div> */}
    </form>
    <div className="navbar-nav mr-auto p-2">
      <ul className='navbar-nav'>
       <li> <NavLink to='/' className='ms-5'>Home</NavLink></li>
       <li> <NavLink to='/contact'className='ms-5'>Contact</NavLink></li>
       <li> <NavLink to='/about' className='ms-5'>About</NavLink></li>
       {/* <li> <NavLink to='/signup' className='ms-5'>Signup</NavLink></li> */}
       {/* <li> <NavLink to='/login' className='ms-5'>Login</NavLink></li> */}
       <li className='d-flex'>
        {isAuthenticated&&<li><p className='ms-5'>{user.name}</p></li> }
        {isAuthenticated?<li><button className='btn btn-primary ms-5' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button></li>:<li><button className='btn btn-primary ms-5' onClick={() => loginWithRedirect()}>Login</button></li>}

       </li>
       {/* <NavLink className='ms-5'>Login/SignUp</NavLink> */}
       <li> <NavLink to='/cart' className='ms-5'>Cart <sup>{cartItem.length}</sup> </NavLink></li>
       </ul>
    </div>
    
  
</nav>
</section>
    {/* Navber-end */}
    {/* ======================sub header========================================== */}
    <div className='subHead '  >
        <ul className='subHead-ul  pt-3'>
<NavLink to='/product/mobiles'><li>Mobiles</li></NavLink>
<Link><li>Computers</li></Link>
<Link><li>Fridge</li></Link>
<Link><li>Furniture</li></Link>
<Link><li>Kitchen</li></Link>
<Link><li>Watch</li></Link>
<Link><li>Ac</li></Link>
<Link><li>Men</li></Link>
<Link><li>women</li></Link>

        </ul>
    </div>
  <p className='category' id="display" onClick={dispalyheading}>{displayed}</p>  
  <p className='category' id="close" onClick={closeheading}>{close}</p>  

    </>
  )
}

export default Header;