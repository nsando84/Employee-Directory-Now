import React, { Component } from 'react'

class FindEmployee extends Component {




    render() {
        return (
            <form style={formStyle}>
                <input 
                style={{padding: "5px"}}
                type="text"
                name="findEmployee"
                placeholder="Search Employee"
                />
                <label >
                    <select style={{padding: "5px"}}>
                        <option>Name</option>
                        <option>Title</option>
                        <option>Salary</option>
                        <option>Manager</option>
                    </select>
                </label>
                <input 
                style={{padding: "5px"}}
                type="submit"
                value="Submit"
                />
            </form>
        )
    }
}

const formStyle = {
    marginTop: '20px'
    
}



export default FindEmployee