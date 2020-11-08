import React, { Component } from 'react'
import Employee from './Employee'

class Employees extends Component {

    render () {
        return (
            <table style={tableStyles}>
                 <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Salary</th>
                        <th>Title</th>
                        <th>Manager</th>
                    </tr>
                </thead>
                <tbody>
                <Employee />  
                </tbody>
            </table>
        )
    }
}

const tableStyles = {
    border: '1px solid green',
    padding: '10px'
}

export default Employees