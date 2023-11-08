import React from 'react'
import { Navigate } from 'react-router-dom'
function PrivateRouter({children}) {
  
     const dataLogin = JSON.parse(localStorage.getItem("users"));
     if(dataLogin){
          return children;
     }
     return <Navigate to={"/login"}/>
}

export default PrivateRouter
