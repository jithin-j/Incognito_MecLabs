import React, { useContext } from 'react'

import Navbar from './Navbar'

import Navigation from './navigation'

import "../stylesheet/mainstyle.css"

const Home = () => {

    
    return (
        <div>

        <Navigation />

            <div className="main"></div>

           <Navbar /> 
        </div>
    )
}

export default Home
