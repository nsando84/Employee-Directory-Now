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
            updateEmployeHolder: {},
            error: {
                display: 'none',
                marginTop: '5px',
                color: 'red'
            }
        }

        this.handleChange = this.handleChange.bind(this)
    }

    employeeCancelHandler = (e) => {
        this.setState({updateModal: false})
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
                style={{padding: "7px", marginLeft: '7px'}}
                type="submit"
                value="Update"
                onClick={this.updateHander}
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





export default FindEmployee