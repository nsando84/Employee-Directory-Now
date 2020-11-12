import React, { Component  } from 'react'
import Aux from '../hoc/Aux'
import './Employees.css'
import Modal from './layout/UI/Modal'
import UpdateEmployee from './UpdateEmployee'
import CreateEmployee from './CreateEmployee'
import axios from 'axios'

class FindEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            updateModal: false,
            createModal: false,
            findUser: '',
            updateEmployeHolder: {},
            error: {
                display: 'none',
                marginTop: '5px',
                color: 'red'
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleCreate = this.handleCreate.bind(this)
    }

    employeeCancelHandler = (e) => {
        this.setState({updateModal: false})
    }

    createCancelHandler = (e) => {
        this.setState({createModal: false})
    }


    errorHander = () => {
        this.setState(prevState => ({
            error: {...prevState.error,
            display: 'block'
            }
        }))
    }

    

    updateHander = (e) => {
        e.preventDefault()
        if (!this.state.findUser) {
            this.errorHander()
        } else {
            const convertName = [...this.state.findUser].join('').split(' ').join('-') 
            return axios.get(`http://localhost:5000/employees/${convertName}`)
                .then(response => {
                    if (response.data === null) {
                        this.errorHander()
                    } else {
                            let managerNow = response.data.manager.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ')
                            this.setState(prevState => ({
                                findUser: '',
                                updateModal: true,
                                updateEmployeHolder: {
                                _id: response.data._id,
                                firstname: response.data.firstname.charAt(0).toUpperCase() + response.data.firstname.slice(1),
                                lastname: response.data.lastname.charAt(0).toUpperCase() + response.data.lastname.slice(1),
                                salary: response.data.salary,
                                title: response.data.title.charAt(0).toUpperCase() + response.data.title.slice(1),
                                manager: managerNow
                                }
                            }))
                            
                    }
                })
                .catch(err => console.log(err))
        }
    }

    handleChange(event) {
        this.setState({findUser: event.target.value});
    }

    handleCreate = (e) => {
        e.preventDefault()
        this.setState({createModal: true})
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
                onInput={() => {
                    if (this.state.findUser.length > 0) {
                        if (this.state.error.display === 'block') {
                            this.setState(prevState => ({
                                error: {...prevState.error,
                                display: 'none'
                                }
                            }))
                        }
                    }
                }}
                />
                <input 
                style={updateBtn}
                type="submit"
                value="Update"
                onClick={this.updateHander}
                />
                <input 
                style={createBtn}
                type="submit"
                value="Create"
                onClick={this.handleCreate}
                />

                <span style={this.state.error}>No results</span>
                
            </form>
            <Modal show={this.state.updateModal} modalClosed={this.employeeCancelHandler}>
                <UpdateEmployee 
                    handleAllDbUpdate={this.props.handleAllDbUpdate}
                    modalClosed={this.employeeCancelHandler}
                    firstname={this.state.updateEmployeHolder.firstname} 
                    lastname={this.state.updateEmployeHolder.lastname} 
                    title={this.state.updateEmployeHolder.title} 
                    salary={this.state.updateEmployeHolder.salary} 
                    manager={this.state.updateEmployeHolder.manager} 
                    id={this.state.updateEmployeHolder._id}/>
            </Modal>
            <Modal show={this.state.createModal} modalClosed={this.createCancelHandler}>
                <CreateEmployee modalClosed={this.createCancelHandler}/>
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

const updateBtn = {
    padding: "7px", 
    marginLeft: '7px'
}

const createBtn = {
    padding: "7px", 
    marginLeft: '7px',
    backgroundColor: '#B1A296',
    color: 'white',
    border: '1px solid black',
    borderRadius: '5%'
}



export default FindEmployee