import React, { useContext } from 'react'
import Chat from './chat'

import Navbar from './Navbar'

import Navigation from './navigation'
import Channels from './Channels'
import '../stylesheet/mainstyle.css'
import { nameContext } from '../../store/name'
import Blog from './Blog'
const Home = () => {

    const {name} = useContext(nameContext)

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
