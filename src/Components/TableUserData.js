import { useTheme } from "../Context/ThemeContext";
import { Table,TableHead, TableContainer,TableBody,TableRow,TableCell } from "@mui/material";
import React from "react";
const TableUserData=({data})=>{

    if(data.length!==0) console.log(data)
    const {theme}=useTheme();
    let cellStyle={color:theme.color,textAlign:"center"}
    return(
      data.length!==0 && 
        <div className="table">
          
        
     <TableContainer >
        <Table >
            <TableHead  >
                <TableRow>
                    <TableCell style={cellStyle}>
                        WPM
                    </TableCell>
                    <TableCell style={cellStyle}>
                        Accuracy
                    </TableCell >
                    <TableCell style={cellStyle}>
                        Characters
                    </TableCell>
                    <TableCell style={cellStyle}>
                        Date
                    </TableCell>
                </TableRow>

            </TableHead>
            <TableBody>
           {
         data.map((i)=>{
            return(

            
                <TableRow>
                    <TableCell  style={cellStyle}>
                       {i.wpm}
                       

                    </TableCell>
                    <TableCell style={cellStyle} >
                        {i.accuracy}
                    
                        </TableCell>
                        <TableCell style={cellStyle}>
                        {i.characters}
                    
                        </TableCell>
                        <TableCell style={cellStyle}>
                        {i.timeStamp.toDate().toLocaleString()}
                        
                        </TableCell>
                </TableRow>)
            })
           }




            </TableBody>
        </Table>
     </TableContainer>
        </div>
        
    )
}
export default TableUserData;