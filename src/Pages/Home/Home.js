import React, { useState, useContext } from 'react'
import Footer from '../../CoreComponents/Footer'
import Header from '../../CoreComponents/Header'
import './Assets/css/Home.css'

// import functions and apis from API_And_Functions
import { api_get_data, api_post_data } from '../../API_And_FUNCTIONS/API'
// import {apiCall} from '../../API_And_FUNCTIONS/Functions'

import { UserContext } from '../../UserContext'

function Home() {

    const { data, name } = useContext(UserContext)

    const [msg, setMsg] = useState()
    const [title, setTitle] = useState()
    const [body, setBody] = useState()


    const apiCall = async () => {
        // const dat = await api([{ urlParams: '/todos/1', image: [{ id: 1, img: 1 }, { id: 2, img: 2 }, { id: 3, img: 3 },] }])
        const dat = await api_get_data('/todos/1')
        data[1](dat)
    }

    const apiPostCall = async () => {
        var formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);
        formData.append('userId', 1);
        const postResponse = await api_post_data('/posts', formData)
        console.log(postResponse)
    }

    return (
        <>
            <Header />

            <div className="homeContainer">
                Home
                <button onClick={() => { apiCall() }}>
                    API get call
                </button>
                {data[0] && <h1>{data[0].title}</h1>}
                <div>
                    <input placeholder="Your name" onChange={(e) => setMsg(e.target.value)} />
                    <button onClick={() => { name[1](msg); alert('Your name added to context') }}>add to context</button>
                </div>

                <div style={{ padding: 5, border: 'solid', display: 'flex', flexDirection: 'column' }}>
                    <input placeholder="title" onChange={(e) => setTitle(e.target.value)} />
                    <input placeholder="body" onChange={(e) => setBody(e.target.value)} />

                    <button onClick={() => { apiPostCall() }}>Post this via api</button>
                </div>

            </div>

            <Footer />
        </>

    )
}

export default Home
