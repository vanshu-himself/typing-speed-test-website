
import React from "react";
import  Select from "react-select";
import { themeOptions } from "../Utils/themeOption";
import { useTheme } from "../Context/ThemeContext";
import GitHubIcon from '@mui/icons-material/GitHub';
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
    <a href="https://github.com/vanshu-himself" style={{color:theme.color}}>{<GitHubIcon/>}</a>
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