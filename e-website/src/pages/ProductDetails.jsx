import React, {useContext, useEffect, useState}  from 'react'
import { useParams,Link } from 'react-router-dom';
import { cartContext } from '../Context/CartContext';

export const ProductDetails = () => {

  const{id} = useParams();

  const[product, setProduct] = useState('');
  const {cart,setCart} = useContext(cartContext);

  useEffect(() => {
    const fetchData = async() => {
      try{
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      }
      catch(err){
          console.log(err);
      }
    }
    fetchData();
  },[]);
    const cartHandler = (id) => {
      setCart([...cart, {title:product.title,image:product.image}]);
    }
  
  return (
    <div>
          <img src={product.image} style={{width: "30%"}}/>
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          <Link to='/cart'><button onClick={() => cartHandler(id)}>Add to Cart</button></Link>
    </div>
  )
}
