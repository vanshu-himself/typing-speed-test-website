import React from "react";
import AccountCircle from "./AccountCircle";
import image from '../22551312.jpg'
const Header=()=>{


    return(
        <div className="header">
            <div className="logo">
              <img alt="aImage" style={{width:"40px",borderRadius:'100px',position:"relative",top:"-5px"}} src={image}/>
            </div>
            <div className="user-icon">
    <AccountCircle/>
   </div>

        </div>
    )
}
export default Header;