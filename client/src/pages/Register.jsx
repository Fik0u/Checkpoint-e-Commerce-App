import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form } from 'react-bootstrap'
import { register } from '../JS/actions/authAction';
import LoadSpin from '../components/LoadSpin';

const Register = () => {

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  })
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLoad = useSelector(state => state.authReducer.isLoad)

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }
  
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(newUser, navigate));
  }

  return (
    <div style={{
      backgroundColor: '#f2f2f2', 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      padding: '20px',
    }}>
      <div style={{
        backgroundColor: 'white', 
        padding: '30px', 
        borderRadius: '8px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        width: '100%', 
        maxWidth: '500px',
      }}>
        <h3 style={{ textAlign: 'center', marginBottom: '30px' }}>Create your account</h3>
        
        {isLoad && <LoadSpin />}
        
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3">
            <Form.Control 
              type="text" 
              placeholder="Enter your name" 
              name='name' 
              value={newUser.name} 
              onChange={handleChange} 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control 
              type="email" 
              placeholder="Enter your email" 
              name='email' 
              value={newUser.email} 
              onChange={handleChange} 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control 
              type="password" 
              placeholder="Password" 
              name='password' 
              value={newUser.password} 
              onChange={handleChange} 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control 
              type="tel" 
              placeholder="Enter your phone number" 
              name='phone' 
              value={newUser.phone} 
              onChange={handleChange} 
            />
          </Form.Group>
          <p>If you already have an account, please <a href="/login">login</a></p>
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
            Register
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Register
