import React, { useState } from 'react'
import User from './User'
import { useSelector } from 'react-redux'
import LoadSpin from './LoadSpin'
import UserDetails from './UserDetails'


const ListUsers = () => {
    const users = useSelector(state => state.userReducer.usersList)
    const isLoad = useSelector(state => state.userReducer.isLoad)

    const [show, setShow] = useState(false)
    const [userId, setUserId] = useState(null)

    const handleShow = (id) => {
      setShow(true);
      setUserId(id)
    }

    const handleClose = () => {
      setShow(false);
      setUserId(null)
    }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignContent: 'center', flexWrap: 'wrap', margin: '40px', gap: '20px' }}>

      {isLoad && <LoadSpin />}
    {users.filter(user => user.isAdmin !== true)
    .map(user => <User  key = {user._id} user = {user} onShowDetails = {handleShow} />)}

    <UserDetails show = {show} handleClose = {handleClose} userId = {userId} />
        
    </div>
  )
}

export default ListUsers
