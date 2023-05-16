import React from 'react'
import Login from './Login';

function Auth({children}) {

    let loginControl = localStorage.getItem('isLogin')


    if(loginControl === 'true')
    {
        return children
    }
    else
    {
        return <Login/>
    }

}

export default Auth