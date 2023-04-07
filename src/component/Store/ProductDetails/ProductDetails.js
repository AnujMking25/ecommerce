import React from 'react'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {

const params=useParams();

const {ProductID}=params;

  return (
    <div>
        <h1>ProductDetails {ProductID}</h1>
        
       
    </div>
  )
}

export default ProductDetails