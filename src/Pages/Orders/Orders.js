import React, { useContext } from 'react'
import Footer from '../../CoreComponents/Footer'
import Header from '../../CoreComponents/Header'

import { UserContext } from '../../UserContext'

function Orders() {

    const { name } = useContext(UserContext)

    return (
        <>
            <Header />

            <div style={{ height: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
                Orders
                <h4>Your name from context</h4>
                <h1>{name[0] ? name[0] : 'Not added to context'}</h1>
            </div>

            <Footer />
        </>
    )
}

export default Orders
