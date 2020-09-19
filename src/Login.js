import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch(e => alert(e.massege))
    }

    const register = e => {
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth) {
                    history.push('/')
                }
            })
            .catch(e => alert(e.massege))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img 
                    className='login_logo'
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    alt=''
                />
            </Link>
            <div className='login_container'>
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button onClick={signIn} className='login_signInButton'>Sign-In</button>
                </form>
                <p>
                    By Signing-in you agree to amazon-clone conditions of use & sale, please see our privacy notice cookies notice and our internet based ads notice.
                </p>
                <button onClick={register} className='login_registerButton'>Create Your Account</button>
            </div>
        </div>
    )
}

export default Login
