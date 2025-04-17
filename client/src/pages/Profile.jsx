import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadSpin from '../components/LoadSpin'
import { getMyProds } from '../JS/actions/prodAction'
import ProdsList from '../components/ProdsList'
import AddProd from '../components/AddProd'

const Profile = () => {
  const user = useSelector((state) => state.authReducer.user)
  const isLoad = useSelector(state => state.authReducer.isLoad)
  const myProducts = useSelector(state => state.prodReducer.myProducts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMyProds())
  }, [dispatch])

  return (
    <div>
      {isLoad && <LoadSpin />}
      <h3>Hello { user.name }</h3>
      <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001884.png" alt="profile" width={"300px"}/>
      <br />
      <AddProd /><img src="https://png.pngtree.com/png-clipart/20240804/original/pngtree-a-robot-with-blue-eye-pointing-transparent-background-png-image_15701772.png" alt="profile" width={"200px"}/>
      <br />
      <h4>My Products</h4>
      <ProdsList products = {myProducts} all = {false} />
    </div>
  )
}

export default Profile
