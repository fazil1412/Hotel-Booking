import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { AppContext } from './../../context/AuthContext';
import Home from '../../pages/home/Home.jsx';
import Login from '../../pages/login/Login';
import { useNavigate } from 'react-router-dom';

const AuthenticateUser = () => {
  const {navigate} = useNavigate()
    const {user} = useContext(AppContext);
    
  return (
    <>
    {
        user._id
        ?
        <Home/>
        :
        <Login/>

    }
    </>
  )
}

export default AuthenticateUser