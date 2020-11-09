import React, { Component } from 'react'

class FindEmployee extends Component {




    render() {
        return (
            <form style={formStyle}>
                <input 
                style={{padding: "7px", width: '70%', marginRight: '7px'}}
                type="text"
                name="findEmployee"
                placeholder="Search Employee"
                />
                <label >
                    <select style={{padding: "7px"}}>
                        <option>Name</option>
                        <option>Title</option>
                        <option>Salary</option>
                        <option>Manager</option>
                    </select>
                </label>
                <input 
                style={{padding: "7px", marginLeft: '7px'}}
                type="submit"
                value="Submit"
                />
            </form>
        )
    }
}

const formStyle = {
    margin: 'auto',
    marginTop: '20px',
    width: '600px'
}



export default FindEmployee