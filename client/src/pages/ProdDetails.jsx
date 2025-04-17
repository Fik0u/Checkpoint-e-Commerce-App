import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOneProd } from '../JS/actions/prodAction';

const ProdDetails = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.prodReducer.product)

    useEffect(() => {
        dispatch(getOneProd(params.id))
    }, [dispatch, params.id])

  return (
    <div>
      Product Details
        <h1>{product.title}</h1>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <p><strong>{product.price} $</strong></p>
    </div>
  )
}

export default ProdDetails
