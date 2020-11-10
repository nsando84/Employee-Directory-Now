import React, { Component } from 'react'
import Aux from '../hoc/Aux'
import { v4 as uuidv4 } from 'uuid'

class Employee extends Component {
    

    render () {
             
        return (
            <Aux> 
            {this.props.employees.map(employees => {
                return (
                    <tr key={uuidv4()}>
                    <td>{employees.firstname}</td>
                    <td>{employees.lastname}</td> 
                    <td>{employees.salary}</td> 
                    <td>{employees.title}</td> 
                    <td>{employees.manager}</td>   
                    </tr>
                )
            })}
            </Aux>
        )
    }
}



export default Employee