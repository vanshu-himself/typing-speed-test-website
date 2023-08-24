import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../FirebaseConfig";



const UserInfo = ({ totalTestTaken})=>{
const[user] = useAuthState(auth)

    return(
        <div className="user-profile">
            <div className="user">
                <div className="picture">
                    <AccountCircleIcon  style={{margin:"auto",marginTop:"3.5rem", display: 'block', transform:"scale(5)"}}/>
                </div>
                <div className="info">
                    <div>{
                    user.email}</div>
                <div className="joined-at">
                    {user.metadata.creationTime}
                </div>
            </div>
            </div>
            <div className="total-tests">
               <span>Total test taken -  {totalTestTaken}</span>
            </div>
        </div>
    )
}
export default UserInfo;