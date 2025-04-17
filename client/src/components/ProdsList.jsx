import React from 'react'
import Product from './Product'

const ProdsList = ({ products, all }) => {
  return (
    <div style = {{display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center", margin: "60px"}}>

        {products.map((prod) => <Product key = {prod._id} product = {prod} all = {all} /> )}

    </div>
  )
}

export default ProdsList
