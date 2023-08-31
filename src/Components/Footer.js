
import React from "react";
import  Select from "react-select";
import { themeOptions } from "../Utils/themeOption";
import { useTheme } from "../Context/ThemeContext";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";

const Footer = ()=>{
// const [value,setValue]=useState();
const {setTheme,theme}=useTheme();
const handleChange = (e)=>{
    // console.log(e);
    // setValue(e.value)
    setTheme(e.value)
    localStorage.setItem('theme',JSON.stringify(e.value))
}

    return(
        <div className="footer">
<div className="links">
    <Link to="https://github.com/vanshu-himself"  target="_blank" style={{color:theme.color}}>{<GitHubIcon/>}</Link>
    <Link to="https://www.linkedin.com/in/vansh-gupta-6666aa1a7"  target="_blank" style={{color:theme.color}}>{<LinkedinIcon/>}</Link>
   
  


</div>
<div className="themeButton">
    

<Select 
// value={value}
onChange={handleChange}
 options={themeOptions}
 menuPlacement="top"
 defaultValue={{label:theme.label, value:theme.value}}
styles={
    {
        control:  styles=>({...styles,backgroundColor: theme.color,color:"red"}),
        menu: styles=>({...styles,background:theme.background,color:theme.color}),
        option: (styles, {isFocused})=>{
            return {
                ...styles,
                background:(!isFocused)?theme.background: theme.color,
                color:(!isFocused)?theme.color: theme.background, 
                cursor:"pointer"
            }
        }
        
    }
}
  />

</div>
        </div>
    )
}
export default Footer;                                             