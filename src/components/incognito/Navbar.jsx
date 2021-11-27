import React from 'react'
import "../stylesheet/mainstyle.css"
import htmlimg from "../images/Group_11.png"
import img2 from "../images/Group_12.png"
import img3 from "../images/Group_13.png"
import img4 from "../images/Group_14.png"
import img5 from "../images/Group_15.png"
import img6 from "../images/Group_16.png"
import img7 from "../images/Group_17.png"
const Navbar = () => {
  return (
    <div>
      <div className="sidenav">
        <a href="#">
          <img src={htmlimg}/>
        </a>
        <a href="#">
          <img src={img2}/>
        </a>
        <a href="#">
          <img src={img3}/>
        </a>
        <a href="#">
          <img src={img4}/>
        </a>
        <a href="#">
          <img src={img5}/>
        </a>
        <a href="#">
          <img src={img6}/>
        </a>
        <a href="#">
          <img src={img7}/>
        </a>
      </div>
    </div>
  )
}

export default Navbar
