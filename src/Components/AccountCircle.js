import React, { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {AppBar, Modal,Tab,Tabs,Box} from "@mui/material";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { useTheme } from "../Context/ThemeContext";
import GoogleButton from 'react-google-button';
import {signInWithPopup,GoogleAuthProvider} from 'firebase/auth';
import { auth } from "../FirebaseConfig";
import errorMapping from "../Utils/errorMapping";
import { toast } from "react-toastify";
import LogoutIcon from '@mui/icons-material/Logout';
import {useAuthState} from 'react-firebase-hooks/auth'
import { useNavigate } from "react-router-dom";




const AccountCircle = ()=>{
const[open,setOpen]=useState(false)
const[value,setValue]=useState(0);
const{theme}=useTheme();
const [user] = useAuthState(auth);
const navigate= useNavigate();


const logout=()=>{
    auth.signOut().then((res)=>{
        toast.success('Logged out', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

    }).catch((err)=>{
        toast.success('Not able to logout', {
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
const handleValueChange=(e,v)=>{
    setValue(v)
}
const handleClose=()=>{ setOpen(false)}
const handleModalOpen=()=>{
    if(user){
   navigate('/UserPage');
    }else{
        setOpen(true);
    }
   
}

const googleProvider = new GoogleAuthProvider();
const handleGoogleSignIn=()=>{
  signInWithPopup(auth,googleProvider).then((res)=>{
    console.log(res)
    toast.success('User Created', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

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
   <div>
<AccountCircleIcon onClick={handleModalOpen}/>
{user && <LogoutIcon onClick={logout}/>}
<Modal onClose={
    handleClose}   open={open}
style={
   { display:'flex',
   alignItems:'center',
   justifyContent:'center'
   }
    
}>

    <div style={{width:'400px',textAlign:'center'}}>
        <AppBar position="static" style={{background:"transparent"}} >
         <Tabs variant="fullWidth"

         value={value}
         onChange={handleValueChange}>
         <Tab label="login" style={{color:theme.color}}></Tab>
            <Tab label="signup" style={{color:theme.color}}></Tab>
         </Tabs>
        </AppBar>
        {value===0 && <LoginForm handleClose={handleClose}/>}
        {value===1 && <SignupForm handleClose={handleClose}/>}
        <Box>
            <span>
            OR
            </span>
            <GoogleButton
            style={{width:"100%",marginTop:"20px", color:theme.background,background:theme.color}}
            onClick={handleGoogleSignIn}/>
        </Box>
    </div>
</Modal>
    </div>
    )
}
export default AccountCircle;