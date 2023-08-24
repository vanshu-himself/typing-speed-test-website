
import { useAuthState } from "react-firebase-hooks/auth";
import { db,auth } from "../FirebaseConfig";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import TableUserData from "../Components/TableUserData";
import Graph from "../Components/Graph";
import UserInfo from "./UserInfo";

const UserPage=()=>{
const[data,setData]=useState([]);
const[graphData,setGraphdata]=useState([]);
const[user,loading]=useAuthState(auth);
const[dataLoading,setdataLoading]=useState(true);

let navigate=useNavigate();
let tempGraphData=[]
const fetchUserData =()=>{
    const resultRef = db.collection('Results');
    const {uid}= auth.currentUser;
    let tempData=[];
    resultRef.where('userId', '==', uid)
    .orderBy('timeStamp','desc')
    .get()
    .then((snapshot)=>{
   
            snapshot.docs.forEach((doc)=>{
               tempData.push({...doc.data()});
               tempGraphData.push([doc.data().timeStamp.toDate().toLocaleString().split(',')[0],
               doc.data().wpm])
            });
            setData(tempData);
            setGraphdata(tempGraphData.reverse());
           setdataLoading(false)
    })
    
}
useEffect(()=>{if(!loading){
    fetchUserData();
}if(!loading && !user){
navigate('/');
}
},[loading])

if(loading || dataLoading){
   
  return  <div className="center-of-screen" ><CircularProgress size={200}/></div>
}
    return(
       
        <div className="canvas">
             <UserInfo
             totalTestTaken={data.length}/>
           <div className="graph-user-page"> <Graph graphData={graphData} /></div>
        <TableUserData data={data} />
        </div>
    )
}
export default UserPage;