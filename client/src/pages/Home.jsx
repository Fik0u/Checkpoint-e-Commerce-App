import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProds } from '../JS/actions/prodAction';
import ProdsList from '../components/ProdsList';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.prodReducer.products)
  
  useEffect(() => {
    dispatch(getAllProds())
  }, [dispatch])

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <img src="https://img.lovepik.com/background/20211022/large/lovepik-digital-high-tech-picture-background-image_500586019.jpg" alt="home" style={{width: '100%', height: '400px'}} />

      <ProdsList products={products} all={true} />
    </div>
  )
}

export default Home
