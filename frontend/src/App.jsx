import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './component/Layout/Nav.jsx'
import Adidas from './component/Brands/Adidas.jsx'
import HM from './component/Brands/HM.jsx'
import LEVIS from './component/Brands/Levis.jsx'
import PUMA from './component/Brands/Puma.jsx'
import USPolo from './component/Brands/USpolo.jsx'
import ZARA from './component/Brands/Zara.jsx'
import Zudio from './component/Brands/Zudio.jsx'
import Rebok from './component/Brands/Rebok.jsx'
import Filla from './component/Brands/Filla.jsx'
import Gucci from './component/Brands/Gucci.jsx'
import Shoes from './component/Brands/Shoes.jsx'
import Women from './component/Brands/Women.jsx'
import Men from './component/Brands/Men.jsx'
import Home from './component/Layout/Home.jsx'
import Footer from './component/Layout/Footer.jsx'
import Signup from './component/Auth/Signup.jsx'
import Login from './component/Auth/Login.jsx'
import Purchase from './component/Purchase/Purchase.jsx'
import Cart from './component/Cart/Cart.jsx'

const App = () => {

  const [search, setsearch] = useState("")
  const [cart, setcart] = useState([])

  // Add To Cart Function
 const addToCart = (product) => {
  setcart([...cart, product])
  alert("Added to Cart")
}

const removeFromCart = (index) => {
  setcart(cart.filter((item, i) => i !== index))
}

  return (
    <>
      <BrowserRouter>
        <Nav setsearch={setsearch} cart={cart} />
        <Routes>
          <Route path='/' element={<Home search={search} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/adidas" element={<Adidas search={search} addToCart={addToCart}/>}/>
          <Route path='/hm' element={<HM search={search} addToCart={addToCart} />} />
          <Route path='/levis' element={<LEVIS search={search} addToCart={addToCart} />} />
          <Route path='/puma' element={<PUMA search={search} addToCart={addToCart} />} />
          <Route path='/zara' element={<ZARA search={search} addToCart={addToCart} />} />
          <Route path='/uspolo' element={<USPolo search={search} addToCart={addToCart} />} />
          <Route path='/filla' element={<Filla search={search} addToCart={addToCart} />} />
          <Route path='/gucci' element={<Gucci search={search} addToCart={addToCart}/>} />
          <Route path='/women' element={<Women search={search} addToCart={addToCart}/>} />
          <Route path='/men' element={<Men search={search} />} addToCart={addToCart}/>
          <Route path='/shoes' element={<Shoes search={search} addToCart={addToCart} />} />
          <Route path='/zudio' element={<Zudio search={search} addToCart={addToCart} />} />
          <Route path='/rebok' element={<Rebok search={search} addToCart={addToCart}/>} />

          <Route path='/cart' element={<Cart cart={cart} removeFromCart={removeFromCart}/>}/>
          <Route path='/purchase/:id' element={<Purchase />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App