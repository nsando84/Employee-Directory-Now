import React, { Component  } from 'react'
import Aux from '../hoc/Aux'
import './Employees.css'
import Modal from './layout/UI/Modal'
import UpdateEmployee from './UpdateEmployee'
import axios from 'axios'

class FindEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            updateModal: false,
            findUser: '',
            updateEmployeHolder: {}
        }

        this.handleChange = this.handleChange.bind(this)
    }

    getEmployee = () => {
        
    }

    employeeCancelHandler = (e) => {
        this.setState({updateModal: false})
    }

    updateHander = (e) => {
        e.preventDefault()
        if (!this.state.findUser) {
            console.log(inputError.display)
        } else {
            const convertName = [...this.state.findUser].join('').split(' ').join('-')   
            return axios.get(`http://localhost:5000/employees/${convertName}`)
                .then(response => {
                    if (response.data === null) {
                        return null
                    } else {
                        this.setState({updateModal: true, updateEmployeHolder: response.data})
                       
                    }
                })
                .catch(err => console.log(err))
        }
    }

    handleChange(event) {
        this.setState({findUser: event.target.value});
    }

    render() {
        return (
            <Aux>
            <form style={formStyle}>
                <input 
                style={{padding: "7px", width: '70%', marginRight: '7px'}}
                type="text"
                name="findEmployee"
                placeholder="Search Employee"
                value={this.state.findUser}
                onChange={this.handleChange}
                />
                <input 
                style={{padding: "7px", marginLeft: '7px'}}
                type="submit"
                value="Search"
                onClick={this.updateHander}
                />
                <span style={inputError}>No results</span>
            </form>
            <Modal show={this.state.updateModal} modalClosed={this.employeeCancelHandler}>
                <UpdateEmployee 
                    firstname={this.state.updateEmployeHolder.firstname} 
                    lastname={this.state.updateEmployeHolder.lastname} 
                    title={this.state.updateEmployeHolder.title} 
                    salary={this.state.updateEmployeHolder.salary} 
                    manager={this.state.updateEmployeHolder.manager} 
                    id={this.state.updateEmployeHolder._id}/>
            </Modal>
            </Aux>
        )
    }
}

const formStyle = {
    margin: 'auto',
    marginTop: '25px',
    width: '600px',
    height: '60px'
}

let inputError = {
    display: 'none',
    marginTop: '5px',
    color: 'red'
}



export default FindEmployee