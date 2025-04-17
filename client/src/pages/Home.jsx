import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProds } from '../JS/actions/prodAction';
import ProdsList from '../components/ProdsList';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.prodReducer.products)
  // console.log(products)
  useEffect(() => {
    dispatch(getAllProds())
  }, [dispatch])

  return (
    <div>

        <img src="https://t3.ftcdn.net/jpg/06/03/27/60/360_F_603276027_JqJCl11RdIw0flpvv2vuCDkYgs0xxtv7.jpg" alt="home" style={{width: '100%', height: '500px'}} />

        <ProdsList products = {products} all = {true} />

    </div>
  )
}

export default Home
