import React from 'react'
import Navbar from './component/Navbar'
import { Routes, Route } from "react-router-dom";
import Login from './component/Login';
import Home from './component/Home';
import Footer from './component/footer';
import Trail from "./component/FreeTrial";
import Plan from './component/Plan';
import FindStore from './component/FindStore';
import Products from './component/Products';
import AllProduct from './component/AllProduct';
import Findcity from './component/Findcity';
import MyCart from './component/MyCart';
import SingleProduct from './component/SingleProduct';
import ErrorPage from './component/ErrorPage';
import Admin from './component/Admin';
import SeeAdmin from './component/SeeAdmin';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/plan" element={<Plan/>}/>  
        <Route path="/trial" element={<Trail/>}/>
        <Route path="/findstore" element={<FindStore/>}/>   
        <Route path="/login" element={<Login/>}/>
        <Route path="/allproduct" element={<AllProduct/>}/>           
        <Route path="/singleproduct" element={<SingleProduct/>}/>       
        <Route path="/findcity" element={<Findcity/>}/>         
        <Route path="/mycart" element={<MyCart/>}/>
        <Route path="/admin" element={<Admin/>}/>        
        <Route path="/seeadmin" element={<SeeAdmin/>}/>
        <Route path="*" element={<ErrorPage/>}/>     
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
