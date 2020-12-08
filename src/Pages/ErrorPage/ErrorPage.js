import React from 'react'
import { useHistory } from 'react-router-dom'

function ErrorPage() {
    const history = useHistory()
    return (
        <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
            Not found page
            <button onClick={() => history.push('/')}>
                Go to home
            </button>
        </div>
    )
}

export default ErrorPage
