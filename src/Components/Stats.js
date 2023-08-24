import React, { useEffect } from "react";
import Graph from "./Graph";
import { auth } from "../FirebaseConfig";
import { toast } from "react-toastify";
import { db } from "../FirebaseConfig";
const Stats = (

   { wpm,
    accuracy,
    correctChars,
    incorrectChars,
    missedChars,
    extraChars,
    graphData}
)=>{
  
    let timeSet=new Set();
    const newGraph = graphData.filter(i=>{
        if(!timeSet.has(i[0])){
        timeSet.add(i[0]);
    return i;
        }
    })
const pushDatatoDB = ()=>{
    if(isNaN(accuracy)){
        toast.error('invalid test', {
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

    const resultRef = db.collection('Results');
    const {uid}=auth.currentUser;
    resultRef.add({
        wpm:wpm,
        accuracy:accuracy,
        timeStamp: new Date(),
        characters:`${correctChars}/${incorrectChars}/${missedChars}/${extraChars}`,
        userId : uid
}).then((res)=>{
    toast.success('Data saved to db', {
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
    toast.error('not able to save result', {
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

useEffect(()=>{

    if(auth.currentUser){
        pushDatatoDB();
    }else{
        toast.error('login to save results', {
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

},[])



    return(
<div className="stats-box">
<div className="left-stats">
   <div className="title">WPM</div>
   <div className="subtitle">{wpm}</div>

   <div className="title">Accuracy</div>
   <div className="subtitle">{accuracy }</div>

   <div className="title">Characters</div>
   <div className="subtitle">{correctChars}/{incorrectChars}/{missedChars}/{extraChars}</div>

  


</div>
<div className="right-stats">
<div className="stats-graph">
<Graph  graphData={newGraph}/>
</div>
</div>
</div>
    )
}
export default Stats;