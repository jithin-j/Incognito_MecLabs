import React from 'react'
import Flutter from '../images/Flutter.png'
import html from '../images/html.png'
import java from '../images/java.png'
import js from '../images/js.png'
import '../stylesheet/Navbar.css'

const Navbar = () => {
const data = [{
  name: 'HTML',
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
}]

  return (
    <div>
     
     <div className="box">
       {data.map((datas)=>{
         return(
         <div className="box__1">
           <img src={datas.img} alt="" />
         </div>
         )
       })}
     </div>
    </div>
  )
}

export default Navbar
