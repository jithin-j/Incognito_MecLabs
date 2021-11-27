import React, { useContext } from 'react'
import Chat from './chat'

import Navbar from './Navbar'
import Navigation from './navigation'
const Home = () => {

    
    return (
        <div>
        <Navigation />
           <Navbar /> 
           <Chat />
        </div>
    )
}

export default Home
