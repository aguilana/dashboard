import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from "../context/AuthContext";
const ProtectedRoutes = ({ children}) => {
  let { currentUser } = useAuth()
  
  if (!currentUser){
    return <Navigate to="/signup"/>
  }
  return (
    children
  )
}

export default ProtectedRoutes