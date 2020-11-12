import React, { Component  } from 'react'
import axios from 'axios'
    

class UpdateEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employee: {
                firstname: '',
                lastname: '',
                salary: 0,
                title: '',
                manager: '',
                id: ''
            }
        }
        this.fieldChange = this.fieldChange.bind(this)
    
    }

    componentDidUpdate(prevProps, prevState) { 
        if (this.props.id !== prevState.employee.id) {
            this.setState(prevState => ({
                employee: {...this.props},
                ...prevState.employee
        }))
        }  
    }

    fieldChange = (word) => {
        this.setState(prevState => ({
            employee: {
                ...prevState.employee,
                [word.target.name]: word.target.value
            }
        })) 
    }
    
    updateHander = () => {
        axios.post(`http://localhost:5000/employees/update/${this.state.employee.id}`, this.state.employee)
            .then(() => {
                this.props.handleAllDbUpdate()
                this.props.modalClosed()
            })
            .catch(err => console.log(err)
        )
    }

    deleteHandler = () => {
        axios.delete(`http://localhost:5000/employees/${this.state.employee.id}`, this.state.employee)
            .then(() => {
                this.props.handleAllDbUpdate()
                this.props.modalClosed()
            })
            .catch(err => console.log(err)
        )
    }
   

    render () {
        
        return (
            <div style={updateEmployeeStyle} id={this.state.employee._id}>
                <span style={summaryEl}>Employee summary</span>
                <hr></hr>
                <div style={nameWrapper}>
                <span>{this.state.employee.firstname} </span>
                <span>{this.state.employee.lastname}</span>
                </div>
                <div>
                    <div style={inputStyle}>
                        <span>Salary<input type="number" style={inputEle} name="salary" value={this.state.employee.salary} onChange={this.fieldChange} /></span> 
                    </div>
                    <div style={inputStyle}>
                        <span>Title</span> <input style={inputEle} name="title" value={this.state.employee.title} onChange={this.fieldChange} />
                    </div>
                    <div style={inputStyle}>
                        <span>Manager</span><input style={inputEle} name="manager" value={this.state.employee.manager} onChange={this.fieldChange} />
                    </div>
                </div>
                <button style={deleteBtn} onClick={this.deleteHandler}>Delete</button>
                <button style={updateBtn} onClick={this.updateHander}>Update</button>
            </div>
        )

    }

}

const updateEmployeeStyle = {
    padding: '20px',
    border: '1px solid #557A95',
    paddingBottom: '100px'
}

const nameWrapper = {
    display: 'block',
    fontSize: '32px',
    marginBottom: '15px',
    marginTop: '10px',
    textAlign: 'left'

}

const inputStyle = { 
    margin: '5px',
    padding: '5px',
    textAlign: 'left'
}

const summaryEl = {
    paddingBottom: '15px', 
    fontSize: '16px'
}

const inputEle = {
    marginTop: '5px',
    display: 'block',
    padding: '2px',
    width: '200px'
}

const updateBtn = {
    marginTop: '50px',
    float: 'right',
    padding: '10px',
    backgroundColor: 'grey',
    color: 'white',
    border: '1px solid black'
}

const deleteBtn = {
    marginTop: '50px',
    float: 'left',
    padding: '10px',
    backgroundColor: 'red',
    color: 'white',
    border: '1px solid black'
}

export default UpdateEmployee