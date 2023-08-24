import React, { useState } from "react";
import { Box,Button, TextField } from "@mui/material";
import { useTheme } from "../Context/ThemeContext";
import {auth} from '../FirebaseConfig';
import { toast } from "react-toastify";
import errorMapping from "../Utils/errorMapping";


const SignupForm=({handleClose})=>{
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPassword,setConfirmPassword]=useState("");

    const {theme}=useTheme();
    const handleSubmit=()=>{
            if(!email || !password || !confirmPassword ){
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
                return;
            }
            if(password!==confirmPassword){
                toast.warning('Password missmatch', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                return;
            }
            auth.createUserWithEmailAndPassword(email,password).then((res)=>{
                toast.success('User created', {
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
                toast.warning(errorMapping[err.code]|| 'some error occur', {
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
onChange={(e)=>setPassword(e.target.value)}
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
label="Confirm Pssword"
onChange={(e)=>setConfirmPassword(e.target.value)}
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

<Button
onClick={handleSubmit}
variant="contained"
size="large"
style={{color: theme.background,backgroundColor:theme.color}}
>Signup</Button>
      </Box>

    )
}
export default SignupForm;