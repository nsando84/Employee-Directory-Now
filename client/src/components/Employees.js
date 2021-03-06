import React, { Component } from 'react'
import Employee from './Employee'
import axios from 'axios'
import './Employees.css'
import FindEmployee from './FindEmployee';
import Aux from '../hoc/Aux'

class Employees extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: [],
            direction: {
                firstname: 'asc',
                lastname: 'asc',
                salary: 'asc',
                title: 'asc',
                manager: 'asc',
            }, 
        }
        this.handleDbUpdates = this.handleDbUpdates.bind(this)
    }

    handleDbUpdates = () => {
        this.getEmployees()
    }
     

      
    componentDidMount() {
        this.getEmployees()
    }
      

    getEmployees = () => {
        axios.get('/employees/')
        .then(response => {
          this.setState({ employees: response.data.map(ele => {
              let managerNow = ele.manager.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ')
                  return {
                      firstname: ele.firstname.charAt(0).toUpperCase() + ele.firstname.slice(1),
                      lastname: ele.lastname.charAt(0).toUpperCase() + ele.lastname.slice(1),
                      salary: ele.salary,
                      title: ele.title.charAt(0).toUpperCase() + ele.title.slice(1),
                      manager: managerNow,
                      id: ele._id
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
        let directionBtn;
        Object.entries(this.state.direction).forEach(e => {
            if (e[1] === 'asc') {
                directionBtn = 'headerSortUp'
            } else { 
                directionBtn = 'headerSortDown'
            }
        })
        return (
            <Aux>
                <FindEmployee handleAllDbUpdate={this.handleDbUpdates}/>
                <table style={tableStyles}>
                    <thead style={tableHead}>
                        <tr style={tableTr}>
                            <th style={tableData}>First Name<span className={directionBtn} style={sortBtn} type="link" onClick={() => this.sortNow('firstname')}></span></th>
                            <th style={tableData}>Last Name<span className={directionBtn} style={sortBtn} type="link" onClick={() => this.sortNow('lastname')}></span></th>
                            <th style={tableData}>Salary<span className={directionBtn} style={sortBtn} type="link" onClick={() => this.sortNow('salary')}></span></th>
                            <th style={tableData}>Title<span className={directionBtn} style={sortBtn} type="link" onClick={() => this.sortNow('title')}></span></th>
                            <th style={tableData}>Manager<span className={directionBtn} style={sortBtn} type="link" onClick={() => this.sortNow('manager')}></span></th>
                        </tr>
                    </thead>
                    <tbody >
                    <Employee employees={this.state.employees} />  
                    </tbody>
                </table>
            </Aux>
        )
    }
}

const tableTr = {
    // border: '1px solid black'
}

const tableData = {
    padding: '13px 25px',
    marginLeft: '5px',
    color: '#557A95',
    
}

const tableStyles = {
    margin: 'auto',
    marginTop: '7px',
    borderCollapse: 'collapse',
    width: '90%',
    paddingLeft: '15px',
    paddingRight: '15px', 
}

const sortBtn = {
    marginLeft: '5px',
}

const tableHead = {
    fontSize: '12px',
}
export default Employees