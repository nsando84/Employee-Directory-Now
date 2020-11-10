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
                 <thead style={tableHead}>
                    <tr style={tableTr}>
                        <th style={tableData}>First Name<button style={sortBtn} type="link" onClick={() => this.sortNow('firstname')}>x</button></th>
                        <th style={tableData}>Last Name<button style={sortBtn} type="link" onClick={() => this.sortNow('lastname')}>x</button></th>
                        <th style={tableData}>Salary<button style={sortBtn} type="link" onClick={() => this.sortNow('salary')}>x</button></th>
                        <th style={tableData}>Title<button style={sortBtn} type="link" onClick={() => this.sortNow('title')}>x</button></th>
                        <th style={tableData}>Manager<button style={sortBtn} type="link" onClick={() => this.sortNow('manager')}>x</button></th>
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
    padding: '13px 25px',
    marginLeft: '5px',
    color: '#5D5C61',
    borderBottom: '2px solid black'

}

const tableStyles = {
    margin: 'auto',
    marginTop: '20px',
    border: '2px outset #557A95',
    borderCollapse: 'collapse',
    width: '90%',
    paddingLeft: '15px',
    paddingRight: '15px' 
}

const sortBtn = {
    marginLeft: '5px',
    padding: '2px'
}

const tableHead = {
    fontSize: '18px',
}
export default Employees