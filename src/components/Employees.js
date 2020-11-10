import React, { Component } from 'react'
import Employee from './Employee'
import './Employees.css'
import axios from 'axios'

class Employees extends Component {
    state = {
        employees: []
    }


    componentDidMount() {
        axios.get('http://localhost:5000/employees/')
          .then(response => {
            this.setState({ employees: response.data })
          })
          .then(() => this.sortNow())
          .catch((error) => {
            console.log(error);
          })
      }
      

    sortNow = (sort) => {
        const titleSorted = [...this.state.employees].sort((a, b) => {
            if (typeof a[sort] !== 'number') {
                return a[sort].localeCompare(b[sort])
            } else {
                return a[sort] - b[sort] 
            }
            
        })
        console.log(titleSorted)
         this.setState({employees: titleSorted})
    }


    render () {

        return (
            <table style={tableStyles} className="table-sortable">
                 <thead style={{fontSize: '18px'}}>
                    <tr style={tableTr}>
                        <th style={tableData}>First Name</th>
                        <th style={tableData}>Last Name</th>
                        <th style={tableData}><button type="link" onClick={() => this.sortNow('salary')}>Salary</button></th>
                        <th style={tableData}><button type="link" onClick={() => this.sortNow('title')}>Title</button></th>
                        <th style={tableData}><button type="link" onClick={() => this.sortNow('manager')}>Manager</button></th>
                    </tr>
                </thead>
                <tbody >
                <Employee employees={this.state.employees}/>  
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