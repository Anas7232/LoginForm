import React from 'react'
import { Redirect, Route } from 'react-router'

/**
* @author
* @function PrivateRoute
**/

const PrivateRoute = ({ rest, component: Component }) => {
  return(
     <Route { ...rest } component={(props) => {
         const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

         if(user){
            return <Component {...props} />
         }else{
            return <Redirect to={`/signin`} />
         }

     }} />
   )

 }

export default PrivateRoute