import { useState } from "react";
import './App.css';
import MenuItem from './components/menu-item';
import { Route, Routes, Link } from 'react-router-dom';
import Basket from './pages/basket';
import Products from "./pages/products";
import Restaurant from "./pages/restaurant";
import SingleProduct from "./pages/single-product";


function App() {
  return (<>
    <Link to="/restaurant">Uber-Eats </Link><br/>
    <Link to="/basket">Basket-page</Link>
    {/* <Link to="/products"> products page</Link>
    <Link to="/restaurant"> restaurant page</Link>
    <Link to="/single-product"> single page</Link> */}

    <Routes>
    <Route path='/basket' element={<Basket/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/restaurant' element={<Restaurant/>}/>
    <Route path='/single-product' element={<SingleProduct/>}/>
  </Routes> 
  </>

  )
  }

export default App;

