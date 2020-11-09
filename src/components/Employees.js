import React, { Component } from 'react'
import Employee from './Employee'

class Employees extends Component {

    render () {
        return (
            <table style={tableStyles}>
                 <thead style={{fontSize: '18px'}}>
                    <tr style={tableTr}>
                        <th style={tableData}>First Name</th>
                        <th style={tableData}>Last Name</th>
                        <th style={tableData}>Salary</th>
                        <th style={tableData}>Title</th>
                        <th style={tableData}>Manager</th>
                    </tr>
                </thead>
                <tbody >
                <Employee />  
                </tbody>
            </table>
        )
    }
}

const tableTr = {
    border: '1px solid black'
}

const tableData = {
    padding: '10px 15px',
}

const tableStyles = {
    margin: 'auto',
    marginTop: '20px',
    border: '2px outset #557A95',
    borderCollapse: 'collapse',
    maxWidth: '600px'  
}

export default Employees