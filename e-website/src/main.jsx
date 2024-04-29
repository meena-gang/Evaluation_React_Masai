import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './Context/AuthContext.jsx' 
import { CartContextProvider } from './Context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartContextProvider>
  <AuthContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AuthContextProvider>
  </CartContextProvider>
)
