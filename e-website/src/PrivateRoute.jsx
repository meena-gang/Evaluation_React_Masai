import React, { useContext } from 'react'
import { authContext } from './Context/AuthContext'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const{auth} = useContext(authContext);
  return (
    <div>
       {auth ? children : <Navigate to='/login'/>}
    </div>
  )
}

export default PrivateRoute