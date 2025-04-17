import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../JS/actions/authAction'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

  const isAuth = useSelector(state => state.authReducer.isAuth)
  const user = useSelector(state => state.authReducer.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div>
         <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">
            <img src="https://i.pinimg.com/originals/4b/cb/1f/4bcb1fb72d1d08efa44efa5ceb712ec7.gif" alt="brand" width={'70px'} />
            GEEKS DEN
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {isAuth ? (
              <>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="#" onClick = {() => dispatch(logout(navigate))}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </>
            )}
            { user.isAdmin && <Nav.Link href="/admin">Dashboard</Nav.Link> }
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
