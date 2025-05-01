import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteProd } from '../JS/actions/prodAction'
import EditProd from './EditProd'

const Product = ({ product, all }) => {
  
  const dispatch = useDispatch()
  const handleDelete = () => {
    if(window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProd(product._id))
    }
  }

  return (
    <div style={{ marginBottom: '30px' }}>
      <Card style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
        <Card.Img 
          variant="top" 
          src={product.image} 
          style={{
            height: '200px', 
            objectFit: 'cover',
            borderTopLeftRadius: '8px', 
            borderTopRightRadius: '8px',
            padding: '15px'
          }} 
        />
        <Card.Body>
          <Card.Title style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>
            {product.title}
          </Card.Title>
          <Card.Text style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#555' }}>
            {product.price} $
          </Card.Text>
          {all ? (
            <Link to={`/products/${product._id}`}>
              <Button variant="primary" style={{ maxWidth: '100%', backgroundColor: '#67777f', border: 'none' }}>Details</Button>
            </Link>
          ) : (
            <>
              <Button variant="danger" onClick={handleDelete} style={{ width: '100%' }}>
                Delete
              </Button>
              <EditProd product={product} />
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  )
}

export default Product
