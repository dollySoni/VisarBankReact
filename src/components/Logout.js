import React from 'react'
import { Redirect } from 'react-router-dom';

export default function Logout() {
   
    const user = sessionStorage.getItem('user');
    console.log(user);
        // remove the token and user from the session storage
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
   
    return (
    <div>
       <Redirect from="/" to="/login" />
    </div>
  )
}
