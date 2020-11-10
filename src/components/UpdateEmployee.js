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
                <span style={summaryEl}>Employee summary</span>
                <hr></hr>
                <div style={nameWrapper}>
                <span>{this.state.employee.firstname} </span>
                <span>{this.state.employee.lastname}</span>
                </div>
                <div>
                    <div style={inputStyle}>
                        <span>Salary<input style={inputEle} name="salary" value={this.state.employee.salary} onChange={this.fieldChange} /></span> 
                    </div>
                    <div style={inputStyle}>
                        <span>Title</span> <input style={inputEle} name="title" value={this.state.employee.title} onChange={this.fieldChange} />
                    </div>
                    <div style={inputStyle}>
                        <span>Manager</span><input style={inputEle} name="manager" value={this.state.employee.manager} onChange={this.fieldChange} />
                    </div>
                </div>
                <button style={updateBtn}>Update</button>
            </div>
        )

    }

}

const updateEmployeeStyle = {
    padding: '15px',
    border: '5px solid #557A95'
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
    marginTop: '10px',
    display: 'block',
    marginReft: '0',
    marginLeft: 'auto',
    padding: '10px',
    backgroundColor: '#5D6C61',
    color: 'white'
}
export default UpdateEmployee