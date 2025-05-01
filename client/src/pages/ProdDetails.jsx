import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOneProd } from '../JS/actions/prodAction'

const ProdDetails = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const product = useSelector(state => state.prodReducer.product)

  useEffect(() => {
    dispatch(getOneProd(params.id))
  }, [dispatch, params.id])

  return (
    <div style={{ 
      backgroundColor: '#f2f2f2', 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      padding: '60px 20px' 
    }}>
      <div style={{
        display: 'flex',
        gap: '40px',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '30px',
        maxWidth: '1000px',
        width: '100%',
        flexWrap: 'wrap'
      }}>

        <div style={{ flex: '1 1 300px', maxWidth: '500px' }}>
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: '500px',
              borderRadius: '10px',
              objectFit: 'cover'
            }}
          />
        </div>


        <div style={{ flex: '2 1 400px' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '50px', marginLeft: '40px', color: '#333' }}>{product.title}</h1>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '100px', marginLeft: '40px', color: '#555' }}>
            {product.description}
          </p>
          <p style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#222',
            backgroundColor: 'rgb(0 150 136 / 39%)',
            padding: '10px 20px',
            borderRadius: '8px',
            display: 'inline-block'
          }}>
            {product.price} $
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProdDetails
