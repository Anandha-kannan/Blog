import React from 'react'; //using by array
import {GiStarsStack} from "react-icons/gi";
import elone2 from"./img/elone2.jpg";
import {AiOutlineDown} from "react-icons/ai";
import {BiWorld} from "react-icons/bi";
import {BsCardImage} from "react-icons/bs";
import {AiOutlineFileGif} from "react-icons/ai";
import {CgDetailsMore} from "react-icons/cg";
import {BsEmojiSmile} from "react-icons/bs";
import {TbCalendarTime} from "react-icons/tb";
import {GrLocation} from "react-icons/gr";
import { BiMessageRoundedDetail} from "react-icons/bi";

import {FiMoreHorizontal } from "react-icons/fi";
import car from"./img/car.jpg";
import mobile from"./img/mobile.jpg";
import rocket from"./img/rocket.jpg";
import { FiMessageCircle} from "react-icons/fi";
import { SiGumroad} from "react-icons/si";
import { AiOutlineHeart} from "react-icons/ai";
import {CgSoftwareDownload } from "react-icons/cg";
import {BsTriangle } from "react-icons/bs";
function Center() {
  var data=[
    {
      name:"Tesla",
      image:car ,
  },
  {
    name:"mobile",
    image:mobile
  },
  {
  name:'Rocket',
  image:rocket,
  }
  ]
  return (
    <div className='center-container'>
    <div className='header-content'>
    <h2>Home</h2>
<GiStarsStack className="icon4"/>
</div>
<div className='img-top'>
<img src={elone2} className="img-center"/>
<div className='bt-icon'>
    <button classsName="top">Everyone
    <AiOutlineDown className='aro-icon'/>
    </button>
     </div>

</div>
 <div className='text'>What's Happening?</div>
 <div className='world-icon'><BiWorld/>Everyone can reply</div>
<hr/>
<div className='emoj-icons'>
    <BsCardImage className='car-icon'/>
    <AiOutlineFileGif className='gif-icon'/>
     <CgDetailsMore className='more-icon'/>
     <BsEmojiSmile className='smile-icon'/>
     <TbCalendarTime className='calender-icon'/>
     <GrLocation className='location-icon'/>
     <button className="bt-center">Tweet</button>
    </div>
<hr/>
<div className='tweet-center'>Show 3 Tweets</div>
<hr/>
{data.map(({name,products,image})=>{
  return(
    <div>
      
<div className='invents'>
< BiMessageRoundedDetail className="invents-icon"/>
<p>Inventions</p>
<button className='see-more'>.See more</button>
</div>
    <div className='img-invention'>
     <img src={image}/>  
    <p className='text-center'>{name}</p>
    <FiMoreHorizontal className="invent-icon"/>
  </div>
  <img src={image} className="img-post"/> 
  <div className='comment-iconss'>
    <FiMessageCircle className="comment-icon"/><p>25</p>
    <SiGumroad className="roatat-icon"/><p>745</p>
    <AiOutlineHeart className="heart-icon"/><p>98</p>
    <CgSoftwareDownload className="download-icon"/><p>95</p>
    <BsTriangle className="triangle-icon"/><p>45</p>
    </div>
  <hr/>
  </div>
  )
})}


</div>
  )
}

export default Center