import React, { Component } from 'react'
import Employee from './Employee'
import axios from 'axios'

class Employees extends Component {
    state = {
        employees: [],
        direction: {
            firstname: 'asc',
            lastname: 'asc',
            salary: 'asc',
            title: 'asc',
            manager: 'asc',
        }
    }


    componentDidMount() {
        axios.get('http://localhost:5000/employees/')
          .then(response => {
            this.setState({ employees: response.data.map(ele => {
                let managerNow = ele.manager.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ')
                    return {
                        firstname: ele.firstname.charAt(0).toUpperCase() + ele.firstname.slice(1),
                        lastname: ele.lastname.charAt(0).toUpperCase() + ele.lastname.slice(1),
                        salary: ele.salary,
                        title: ele.title.charAt(0).toUpperCase() + ele.title.slice(1),
                        manager: managerNow
                    }
                }) 
            })
          })
          .catch((error) => {
            console.log(error);
          })
      }
      

    sortNow = (sortValue) => { 
        const titleSorted = [...this.state.employees].sort((a, b) => {
            if (typeof a[sortValue] !== 'number') {
                return (
                    this.state.direction[sortValue] === 'asc' ?
                    a[sortValue].localeCompare(b[sortValue]) :
                    b[sortValue].localeCompare(a[sortValue])
                )
            } else {
                return (
                    this.state.direction[sortValue] === 'asc' ?
                    a[sortValue] - b[sortValue] :
                    b[sortValue] - a[sortValue]
                )
            }    
        })
         this.setState({
             employees: titleSorted,
             direction: {
                 [sortValue]: this.state.direction[sortValue] === 'asc' ?
                 'dsc' : 'asc'
             }
            })
    }


    render () {

        return (
            <table style={tableStyles}>
                 <thead style={{fontSize: '18px'}}>
                    <tr style={tableTr}>
                        <th style={tableData}><button type="link" onClick={() => this.sortNow('firstname')}>First Name</button></th>
                        <th style={tableData}><button type="link" onClick={() => this.sortNow('lastname')}>Last Name</button></th>
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
    width: '800px'  
}

export default Employees