import React, { Component } from 'react'
import Aux from '../hoc/Aux'
import { v4 as uuidv4 } from 'uuid'

class Employee extends Component {
   
    render () {       
        return (
            <Aux> 
            {this.props.employees.map((employees, index) => {
                let colorRow;
                index % 2 !== 0 ? colorRow = "white" : colorRow = "#F5F5F5"

                return (
                    <tr key={uuidv4()} style={{backgroundColor: colorRow, height: "15px"}}>
                    <td style={tdStyle}>{employees.firstname}</td>
                    <td style={tdStyle}>{employees.lastname}</td> 
                    <td style={tdStyle}>{employees.salary}</td> 
                    <td style={tdStyle}>{employees.title}</td> 
                    <td style={tdStyle}>{employees.manager}</td>   
                    </tr>
                )
            })}
            </Aux>
        )
    }
}
 const tdStyle = {
     padding: "9px",
    //  border: "1px solid lightgrey"
 }

export default Employee