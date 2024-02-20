import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from '../../nav_tabs/Home';
import Login from '../../nav_tabs/Login';
import About from '../../nav_tabs/About';
import Contact from '../../nav_tabs/Contact';
import Sign_up from '../../nav_tabs/sign_up';
import Cart from '../../nav_tabs/Cart';
import Header from './Header';
import Mobiles from '../../product_components/Mobiles';
import Furniture from '../../product_components/Furniture';
import Watch from '../../product_components/Watch';
import Menwear from '../../product_components/Menwear';
import Women from '../../product_components/Women';
import Books from '../../product_components/Books';
import Fridge from '../../product_components/Fridge';
import Kitchen from '../../product_components/Kitchen';
import Ac from '../../product_components/Ac';
import Computers from '../../product_components/Computers';
import Mobilesingle from '../../singleproduct _components/Mobilesingle';
import Computersingle from '../../singleproduct _components/Computersingle';
import Fridgesingle from '../../singleproduct _components/Fridgesingle';
import UserCart from '../UserCart';

const Routerr = () => {
  return (
    <div>
        <Header/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Sign_up/>}/>
        {/* <Route path='/cart' element={<Cart/>}/> */}
        <Route path='/product/mobiles' element={<Mobiles/>}/>
        <Route path='/product/books' element={<Books/>}/>
        <Route path='/product/computers' element={<Computers/>}/>
        <Route path='/product/ac' element={<Ac/>}/>
        <Route path='/product/fridge' element={<Fridge/>}/>
        <Route path='/product/furniture' element={<Furniture/>}/>
        <Route path='/product/kitchen' element={<Kitchen/>}/>
        <Route path='/product/menwear' element={<Menwear/>}/>
        <Route path='/product/women' element={<Women/>}/>
        <Route path='/product/watch' element={<Watch/>}/>
{/* ============================dynamic routing============================================= */}
<Route path='/mobiles/:id' element={<Mobilesingle/>}/>
<Route path='/computers/:id' element={<Computersingle/>}/>
<Route path='/fridge/:id' element={<Fridgesingle/>}/>
<Route path='/cart' element={<UserCart/>}/>


        </Routes>




    </div>
  )
}

export default Routerr;