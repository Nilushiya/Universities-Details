// ProtectedRoute.js
import React, { Children, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { decodeToken, useUserContext } from '../Context/UserContext';

const ProtectedRoute = ({ children, requiredRole }) => {
    const navigate = useNavigate()
    const decodedToken = decodeToken();
    const [userRole, setUserRole] = useState('')
    useEffect(() => {
        if(decodedToken){
            const userRole = decodedToken.userType
            setUserRole(userRole)
        }
        else{
            setUserRole('')
            navigate('/')
        }
    }, [decodeToken])
    
    if(!userRole){
        navigate('/')
    }
    else if(userRole !== requiredRole){
        navigate('/')
    }
    
  
  return children;
};

export default ProtectedRoute;
