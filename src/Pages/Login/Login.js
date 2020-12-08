import React, { useContext, useEffect, useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom';
import './Assets/Login.css'
import { UserContext } from '../../UserContext'
import Cookie from 'js-cookie'

function Login() {
    const { token } = useContext(UserContext)
    const history = useHistory()
    const [user, setUser] = useState(localStorage.getItem('token'));



    return (

        <div className="loginContainer">
            {!user ? (
                <div className="loginSection">
                    <input placeholder="username"></input>
                    <input placeholder="password"></input>
                    <button
                        onClick={() => {
                            Cookie.set('token', '123');
                            localStorage.setItem('token', '123')
                            token[1]('token');
                            history.push('/')
                        }}
                    >
                        login
                </button>
                </div>
            ) :
                <Redirect to="/" />
            }

        </div>


    )
}

export default Login
