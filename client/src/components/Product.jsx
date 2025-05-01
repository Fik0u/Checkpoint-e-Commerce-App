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
    <div>

      
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= { product.image } />
      <Card.Body>
        <Card.Title>{ product.title }</Card.Title>
        <Card.Text>
          { product.description }
          <br />
          {product.price} $
        </Card.Text>
        {all ? (<Link to = {`/products/${product._id}`}>
        <Button variant="primary">Details</Button>
        </Link>)
        : (<>
              <Button variant="danger" onClick = {handleDelete}>Delete</Button>
              <EditProd product = {product} />
          </>)}
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default Product
