import React from 'react'
import {FiTwitter} from "react-icons/fi";
import {FaHome} from "react-icons/fa";
import {MdTravelExplore} from "react-icons/md";
import {IoMdNotificationsOutline} from "react-icons/io";
import {AiOutlineMail} from "react-icons/ai";
import {FiBookmark} from "react-icons/fi";
import {CgPlayListSearch} from "react-icons/cg";
import {CgProfile} from "react-icons/cg";
import {AiOutlineMessage} from "react-icons/ai";
import {FiMoreHorizontal} from "react-icons/fi";
import elone2 from"./img/elone2.jpg";

function NavTw() {
  return (
  
    <div className="nave-container">
            <nav className="navebar">
      <div className="logo"> 
      <FiTwitter/>
            </div>
            
    <ul className= "ul">  
 
      <li><FaHome className='navicon'/> <a href="#" classname="active">Home</a> </li>
      <li><MdTravelExplore className='navicon'/> <a href="#" classname="active">Explore</a> </li>
      <li><IoMdNotificationsOutline className='navicon'/>  <a href="#">Notification</a>  </li>
      
      <li><AiOutlineMail className='navicon'/>  <a href="#" >Message</a> </li>
      <li><FiBookmark className='navicon'/>  <a href="#">Bookmark</a> </li>
      <li><CgPlayListSearch className='navicon'/>  <a href="#" >List</a> </li>
      <li><CgProfile className='navicon'/>  <a href="#" >Profile</a> </li>
      <li><AiOutlineMessage className='navicon'/> <a href="#" >MdTravelExplore</a> </li>
    </ul>
    <button className="bt-nav">Tweet</button>
    <div className='acc'>
      <img src={elone2} /> 
     <div><p>ELON</p>
    <p>@elone79347</p></div>
    <FiMoreHorizontal className="icon_d"/>
    </div>
    
    
           </nav>
  </div>
  
  )
}

export default NavTw