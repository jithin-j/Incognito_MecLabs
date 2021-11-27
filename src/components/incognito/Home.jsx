import React from 'react'
import Navbar from './Navbar'
import Channels from "./Channels"
import "../stylesheet/mainstyle.css"
import "../stylesheet/channels.css"
const Home = () => {
    return (
        <div style={{
            height:'100vh',
            background:'#00062a',
            display: 'flex',
            margin: 0
            
        }} className="home">
           <Navbar /> 
           <Channels />
        </div>
    )
}

export default Home
