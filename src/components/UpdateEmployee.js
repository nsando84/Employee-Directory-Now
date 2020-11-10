import React, { Component  } from 'react'

    

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
                _id: ''
            }
        }
        this.fieldChange = this.fieldChange.bind(this)
    }

    componentDidUpdate() { 
        if (this.state.employee._id === '') {
            this.setState({employee: {...this.props}})
        }  
    }

    fieldChange = (word) => {
        console.log(word.target.value)
    }
    
    render () {
        
        
        return (
            <div style={updateEmployeeStyle} id={this.state.employee._id}>
                <input name="firstname" value={this.state.employee.firstname} onChange={this.fieldChange} />
                <input name="lastname" value={this.state.employee.lastname} onChange={this.fieldChange} />
                <input name="salary" value={this.state.employee.salary} onChange={this.fieldChange} />
                <input name="title" value={this.state.employee.title} onChange={this.fieldChange} />
                <input name="manager" value={this.state.employee.manager} onChange={this.fieldChange} />
            </div>
        )

    }

}

const updateEmployeeStyle = {
    padding: '10px'
}

export default UpdateEmployee