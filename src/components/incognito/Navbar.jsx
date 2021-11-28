import React, { useContext } from 'react'
import Flutter from '../images/Flutter.png'
import html from '../images/html.png'
import java from '../images/java.png'
import js from '../images/js.png'
import react1 from '../images/react1.png'
import python from '../images/python.png'
import selenium from '../images/selenium.png'

import '../stylesheet/Navbar.css'
import { nameContext } from '../../store/name'

const Navbar = () => {
  const [name,setName] = useContext(nameContext)
  const handleClick = e =>{
    e.preventDefault()
    
  }
const data = [
{
  name: 'html',
  img:html ,
},
{
  name: 'JS',
  img:js ,
}
,
{
  name: 'Java',
  img:java ,
},
{
  name: 'Flutter',
  img:Flutter ,
},
{
  name: 'Python',
  img:python ,
},
{
  name: 'react1',
  img: react1 ,
},
{
  name: 'Selenium',
  img:selenium ,
}]

  return (
    <div>
      
     <div className="sidenav">
       {data.map((datas)=>{
         return(
         <div className="box__1">
           <img onClick={handleClick} className = 'navbar-img' src={datas.img} alt="" />
         </div>
         )
       })}
     </div>
    </div>
  )
}

export default Navbar
