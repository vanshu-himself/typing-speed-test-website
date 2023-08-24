import React, { useState } from "react";

import { Box,Button, TextField } from "@mui/material";
import { useTheme } from "../Context/ThemeContext";
import { auth } from "../FirebaseConfig";
import { toast } from "react-toastify";
import errorMapping from "../Utils/errorMapping";



const LoginForm=({handleClose})=>{
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const {theme}=useTheme();
    const handleSubmit=()=>{
   if(!email || !password){

toast.warning('Fill all details', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});
   }
   auth.signInWithEmailAndPassword(email,password).then((res)=>{
    toast.success('Logged in', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        handleClose();
   }).catch((err)=>{
    toast.error(errorMapping[err.code] || 'some error occur', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
   })


    }
    return(
      <Box 
      p={3}
      style={{
        display:"flex",
        flexDirection:"column",
        gap:'20px',


      }}>
<TextField
variant="outlined"
type="email"
label="Enter Email"
onChange={(e)=>setEmail(e.target.value)}
InputLabelProps={{
    style:{
        color:theme.color
    }
}}
InputProps={{
    style:{
        color:theme.color
    }
}}/>
<TextField
variant="outlined"
type="password"
label="Enter Pssword"
InputLabelProps={{
    style:{
        color:theme.color
    }
}}
InputProps={{
    style:{
        color:theme.color
    }
}}
onChange={(e)=>setPassword(e.target.value)}/>
<Button
onClick={handleSubmit}
variant="contained"
size="large"
style={{color: theme.background,backgroundColor:theme.color}}
>Login</Button>
      </Box>

    )
}
export default LoginForm;