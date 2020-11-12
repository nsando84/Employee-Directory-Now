import React, { Component } from 'react'
import Aux from '../hoc/Aux'
import axios from 'axios'

class CreateEmployee extends Component {
    constructor(props) {
        super(props)
        this.state ={
            employee: {
                firstname: '',
                lastname: '',
                salary: '',
                title: '',
                manager: '',
            },
            error: {
                display: 'none',
                marginTop: '5px',
                color: 'red',
                fontSize: '12px',
                textAlign: 'center',
            }
        }

    }

    

    fieldChange = (word) => {
        this.setState(prevState => ({
            employee: {
                ...prevState.employee,
                [word.target.name]: word.target.value
            },
            error: {...prevState.error,
                display: 'none'
            }
        })) 
    }

    createHandler = () => {
        const { firstname, lastname, manager, salary, title } = this.state.employee
        if (!firstname || !lastname || !manager || !salary || !title) {
            this.setState(prevState => ({
                error: {...prevState.error,
                display: 'block'
                }
            }))
        } else {  
            axios.post('/employees/add/', this.state.employee)
                .then(() => {
                    this.props.handleAllDbUpdate()
                })
                .catch(err => console.log(err))
            this.props.modalClosed()
            this.setState({employee: {
                firstname: '',
                lastname: '',
                salary: '',
                title: '',
                manager: '',
                }
            })
        }
    }


    render () {
        return (
            <Aux>
                <div style={updateEmployeeStyle}>
                    <span style={summaryEl}>Create new employee</span>
                    <hr></hr>
                    <div style={nameWrapper}>
                        <div style={inputStyle}>
                            <span>First Name: 
                            <input name="firstname" style={inputEle} value={this.state.employee.firstname} onChange={this.fieldChange}/>
                            </span>
                        </div>

                        <div style={inputStyle}>
                            <span>Last Name: 
                            <input name="lastname" style={inputEle} value={this.state.employee.lastname} onChange={this.fieldChange}/>
                            </span>
                        </div>

                        <div style={inputStyle}>
                            <span>Salary:   
                            <input name="salary" type="number" style={inputEle} value={this.state.employee.salary} onChange={this.fieldChange}/>
                            </span>
                        </div> 

                        <div style={inputStyle}>
                            <span>Title:
                            <input name="title" style={inputEle} value={this.state.employee.title} onChange={this.fieldChange}/>
                            </span>
                        </div>

                        <div style={inputStyle}>
                            <span>Manager
                            <input name="manager" style={inputEle} value={this.state.employee.manager} onChange={this.fieldChange}/>
                            </span>
                        </div>
                        <span style={this.state.error}>All fields required</span>
                    </div>
                    <button style={createBtn} onClick={this.createHandler}>Create</button>
                </div>
            </Aux>
        )
    }
}


const summaryEl = {
    paddingBottom: '15px', 
    fontSize: '16px'
}

const nameWrapper = {
    display: 'block',
    fontSize: '18px',
    marginBottom: '15px',
    marginTop: '10px',
    textAlign: 'left',
    height: '345px'
}

const inputStyle = { 
    margin: '5px',
    padding: '5px',
    textAlign: 'left'
}

const inputEle = {
    marginTop: '5px',
    display: 'block',
    padding: '2px',
    width: '100%'
}

const updateEmployeeStyle = {
    padding: '15px',
    border: '5px solid #557A95',
    paddingBottom: '60px'
}

const createBtn = {
    marginTop: '10px',
    float: 'right',
    padding: '10px',
    backgroundColor: '#B1A296',
    color: 'white',
    border: '1px solid black'
}

export default CreateEmployee