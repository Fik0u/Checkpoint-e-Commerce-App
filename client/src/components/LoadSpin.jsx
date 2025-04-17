import React from 'react'
import { Spinner } from 'react-bootstrap'

const LoadSpin = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>

        <Spinner animation="border" variant='success'/>
        
    </div>
  )
}

export default LoadSpin
