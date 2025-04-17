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
    <div className='container'>
      <h3>Login</h3>

      {isLoad && <LoadSpin />}
      <Form onSubmit = {handleLogin}>
      <Form.Group className="mb-3">
        <Form.Control type="email" placeholder="Enter email" name = 'email' value = {user.email} onChange = {handleChange} />

      </Form.Group>

      <Form.Group className="mb-3">

        <Form.Control type="password" placeholder="Password" name = 'password' value = {user.password} onChange = {handleChange} />
      </Form.Group>
      <p>If you don't have an account, please <a href="/register">register</a></p>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>

    </div>
  )
}

export default Login
