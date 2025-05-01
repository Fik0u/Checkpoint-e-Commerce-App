import React from 'react'
import Product from './Product'

const ProdsList = ({ products, all }) => {
  return (
    <div 
      style={{
        display: "flex", 
        flexWrap: "wrap", 
        justifyContent: "space-evenly", 
        alignItems: "flex-start", 
        margin: "60px auto", 
        gap: "30px", 
        padding: "0 15px"
      }}
    >
      {products.map((prod) => <Product key={prod._id} product={prod} all={all} />)}
    </div>
  )
}

export default ProdsList
