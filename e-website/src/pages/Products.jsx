import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const Products = () => {
  const[products,setProducts] = useState([]);
  

  useEffect(() => {
    const fetchData = async() => {
      try{
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
      }
      catch(err){
          console.log(err);
      }
    }
    fetchData();
  },[]);
  
  return (
    <div>
      {products.length>0 ? 
        <ul style={{listStyle: "none"}}>
          {products.map((product,i) => (
            <li key={i}>
              <img src={product.image} style={{width:'30%'}}/>
              <br/>
              <Link to={`/products/${product.id}`}>Click here to view details</Link>
            </li>
          ))}
        </ul>:"No Data"}

    </div>
  )
}

export default Products