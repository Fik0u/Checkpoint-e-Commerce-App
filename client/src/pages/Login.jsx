import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';
import { login } from '../JS/actions/authAction';
import LoadSpin from '../components/LoadSpin';

const Login = () => {
  const [user, setUser] = useState({
    email : '',
    password: ''
  })
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLoad = useSelector(state => state.authReducer.isLoad)

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value})
  }

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(login(user, navigate))
  }
  
  return (
    <div style={{
      backgroundColor: '#f2f2f2', 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      padding: '20px 20px 20px 20px',
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center',
      }}>
        <h3 style={{ marginBottom: '30px', color: '#333' }}>Sign in to your account</h3>

        {isLoad && <LoadSpin />}
        
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Enter email"
              name='email'
              value={user.email}
              onChange={handleChange}
              style={{
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                marginBottom: '15px',
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              name='password'
              value={user.password}
              onChange={handleChange}
              style={{
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                marginBottom: '15px',
              }}
            />
          </Form.Group>
          
          <p style={{ marginBottom: '20px' }}>
            If you don't have an account, please <a href="/register" style={{ color: '#007bff' }}>register</a>
          </p>

          <Button 
            variant="primary" 
            type="submit"
            style={{
              backgroundColor: '#4CAF50', 
              borderColor: '#4CAF50',
              padding: '10px 20px',
              fontSize: '1rem',
              fontWeight: 'bold',
              width: '100%',
              borderRadius: '8px',
            }}
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Login
