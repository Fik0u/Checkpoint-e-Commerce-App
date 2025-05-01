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
    <div style={{ backgroundColor: '#f2f2f2', minHeight: '100vh', padding: '40px' }}>
      {isLoad && <LoadSpin />}
      

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: '80px',
        padding: '40px',
        gap: '100px',
        flexWrap: 'wrap'
      }}>

        <div style={{ textAlign: 'center' }}>
          <h3>Hello {user.name}</h3>
          <img
            src="https://png.pngtree.com/png-vector/20240613/ourmid/pngtree-cute-cartoon-robot-face-avatar-with-new-normal-life-png-image_12710975.png"
            alt="profile"
            width="180px"
            style={{ borderRadius: '50%', marginTop: '10px' }}
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <AddProd />
          <img
            src="https://png.pngtree.com/png-clipart/20240804/original/pngtree-a-robot-with-blue-eye-pointing-transparent-background-png-image_15701772.png"
            alt="robot"
            width="160px"
            style={{ marginTop: '20px' }}
          />
        </div>
      </div>


      <h4 style={{ marginBottom: '20px' }}>My Products</h4>
      <ProdsList products={myProducts} all={false} />
    </div>
  )
}

export default Profile
