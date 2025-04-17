import React, { useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getOne } from '../JS/actions/userAction'

const UserDetails = ({ show, handleClose, userId }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userReducer.user)
    const isLoad = useSelector(state => state.userReducer.isLoad)

    useEffect(() => {
        
        dispatch(getOne(userId))

    }, [dispatch, userId])
  return (
    <div>
      
      <Modal show = {show} onHide = {handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           {user && !isLoad && (
           
                <div style={{ textAlign: 'center' }}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </div>
           )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick = {handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default UserDetails
