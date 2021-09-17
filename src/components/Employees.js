import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, { Component } from 'react'


export default class Employees extends Component {

state={
    employeeData:[
        {
            "name":"Rahul",
            "age":29

        },
        {
            "name":"Aswathy",
            "age":32

        },
        {
            "name":"Manoj",
            "age":28

        },
        {
            "name":"Arya",
            "age":27

        },
        {
            "name":"Remya",
            "age":45
        }
    ]
}

    render() {
        return (
            <div>
         <TableContainer>
             <Table>
                 <TableHead>
                    <TableRow>
                    <TableCell> Sl.no </TableCell>
                    <TableCell> Name </TableCell>
                    <TableCell> Age </TableCell>
                     </TableRow>
                 </TableHead>
                 <TableBody>
                     {this.state.employeeData.map( 
                         (value,index)=>{
                            return <TableRow>
                            <TableCell> {index}</TableCell>
                            <TableCell>  {value.name}</TableCell>
                            <TableCell> {value.age}</TableCell>
                        </TableRow>
                         }

                      )}
                     

                
                 </TableBody>

             </Table>
  
        </TableContainer>  


            </div>
        )
    }
}
