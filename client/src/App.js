import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Error from './pages/Error';
import NavBar from './components/NavBar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from './JS/actions/authAction';
import Dashboard from './pages/Dashboard';
import AdminRoute from './routes/AdminRoute';
import ErrorToast from './components/ErrorToast';
import LoadSpin from './components/LoadSpin';
import ProdDetails from './pages/ProdDetails';



function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.authReducer.isAuth);
  const user = useSelector(state => state.authReducer.user);
  const errors = useSelector(state => state.authReducer.errors);
  const isLoad = useSelector(state => state.authReducer.isLoad)

  // Check if the user is already authenticated
  useEffect(() => {
    if(localStorage.getItem('token')) {
      dispatch(currentUser())
    }
  }, [dispatch])

  return (
    <div className="App">
      {isLoad && <LoadSpin />}
      
      <ErrorToast  errors = {errors} />

      <NavBar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/products/:id" element = {<ProdDetails />} />
        {isAuth ? ( 
        <Route path = "/profile" element = {<Profile />} />
        ) : (
        <>
          (<Route path = "/register" element = {<Register />} /> 
          <Route path = "/login" element = {<Login />} />)
        </>
        )}
        
        {/* This is a secure route to let only admin users access the dashboard */}
        {user && user.isAdmin && 
        (<Route path = "/admin" element = {<AdminRoute isAdmin = { user.isAdmin } />}>
            <Route path = '/admin' element = {<Dashboard />} />
        </Route>)}

        <Route path = "/*" element = {<Error />} />
      </Routes>
      
    </div>
  );
}

export default App;
