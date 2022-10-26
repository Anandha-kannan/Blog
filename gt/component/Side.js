import React from 'react'
import {BiSearchAlt2 } from "react-icons/bi";

function Side() {
  return (
    <div className='side-container'>
        <div className='search-bar'>
            <label>
                <BiSearchAlt2/>
            <input type="text" placeholder="Search Twitter" className="input"/>
        </label>
        </div>
        <div className="side-text">
           <p className="text">What's happenig</p> 
           <p className="text2">Business& finance</p>
        </div>
        
    </div>
  )
}

export default Side