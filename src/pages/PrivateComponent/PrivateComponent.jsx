import React from 'react'
import { Navigate } from 'react-router-dom';

export const PrivateComponent = ({children}) => {
    const cookiesData = getCookie("isLogin").split("=");
    const loginStatus = Boolean(cookiesData[1])
    if(!loginStatus){
         return <Navigate to="/login" />
    }
    return children;
}
