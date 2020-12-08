import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../Assets/css/Header.css'
import { UserContext } from '../UserContext'
import Cookie from 'js-cookie'

function Header() {
    const { token } = useContext(UserContext)
    const history = useHistory()
    return (
        <div className="headerContainer">
            <Link to="/">Home</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/products">Products</Link>
            <div style={{ cursor: 'pointer' }}
                onClick={() => {
                    Cookie.remove('token');
                    localStorage.removeItem('token')
                    token[1](null);
                    history.push('/login')
                }}
            >
                Logout
            </div>
        </div >
    )
}

export default Header
