import React, { useContext } from 'react'
import Chat from './chat'

import Navbar from './Navbar'
import Navigation from './navigation'
import Channels from './Channels'
import '../stylesheet/mainstyle.css'
const Home = () => {

    
    return (
        <div>
        <Navigation />
           <Navbar /> 
           <Chat />
           <Channels />
        </div>
    )
}

export default Home
