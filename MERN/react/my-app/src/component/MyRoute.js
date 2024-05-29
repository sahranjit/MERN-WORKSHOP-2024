import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Product from './Product'
import CreateProduct from './CreateProduct'
import GetSpecificProduct from './GetSpecificProduct';


const MyRoute = () => {
  return (
    <div>

<Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route path="/product/create" element={<CreateProduct></CreateProduct>}
        ></Route>


        {/* the below code is for dynamic route. */}
         <Route path="/product/:id" element={<GetSpecificProduct></GetSpecificProduct>}></Route>

</Routes>

    </div>
  )
}

export default MyRoute



//attach pages to the link