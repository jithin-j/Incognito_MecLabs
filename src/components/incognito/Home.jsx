import React, { useContext } from 'react'
import Chat from './chat'

import Navbar from './Navbar'

import Navigation from './navigation'

import "../stylesheet/mainstyle.css"

const Home = () => {

    
    return (
        <div>

        <Navigation />

            <div className="main"></div>

           <Navbar /> 
           <Chat />
        </div>
    )
}

export default Home
