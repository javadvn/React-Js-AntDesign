import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    let navigate = useNavigate();

    const login = () => {


        if(email === 'cagatay@mail.com' && password === '123')
        {
            localStorage.setItem('isLogin', 'true')
            navigate('/products')
        }
    }

  return (<>
    <h1>Login</h1>
    <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setemail(e.target.value)} />
    </div>
    <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setpassword(e.target.value)} />
    </div>
    <button onClick={() => login()}>Login</button>
  </>
  )
}

export default Login