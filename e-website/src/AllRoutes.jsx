import React from 'react'
import {Route,Routes} from 'react-router-dom'
import { ProductDetails } from './pages/ProductDetails'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import Login from './pages/Login'
import Products from './pages/Products'
import PrivateRoute from './PrivateRoute'
import Cart from './pages/Cart'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/products' element={<PrivateRoute>
          <Products/>
          </PrivateRoute>}>
        </Route>
        <Route path='/products/:id' element={<ProductDetails/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
    </Routes>
  )
}

export default AllRoutes