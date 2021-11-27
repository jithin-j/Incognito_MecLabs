import React from 'react'
import "../stylesheet/mainstyle.css"
import Python from '../images/Python.png'
import Reacticon from '../images/React.png'
import Htmlicon from '../images/Html.png'
import Flutter from '../images/Flutter.png'
import Selenium from '../images/Selenium.png'
import Javascript from '../images/Javascript.png'
import Java from '../images/Java.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

const data = [
{
  title:'Html',
  img: Htmlicon
},
{
title:'Python',
img:Python
}
,
{
  title:'React',
  img: Reacticon
},
{
  title:'Flutter',
  img: Flutter
},
{
  title:'Java',
  img: Java
},
{
  title:'Javascript',
  img: Javascript
},
{
  title:'Selenium',
  img: Selenium
},
]



  return (


    <div className="sidenav">
      {data.map((maper)=>{
        return(

      <div >
        <Link to="/">
         <img src={maper.img} alt=""/> 
        </Link>
      </div>
        )

      })}
      
    </div>
  )
}

export default Navbar
