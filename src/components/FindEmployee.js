import React, { Component } from 'react'

class FindEmployee extends Component {

    state = {
        disabled: false
    }

    componentDidMount() {
        

    }

    optionChecker(e) {
        console.log(e.target.value)
    }


    render() {
        return (
            <form style={formStyle}>
                <input 
                style={{padding: "7px", width: '70%', marginRight: '7px'}}
                type="text"
                name="findEmployee"
                placeholder="Search Employee"
                disabled={(this.state.disabled)}
                />
                {/* <label >
                    <select style={{padding: "7px"}} onChange={this.optionChecker}>
                        <option value="enabled">Name</option>
                        <option value="disabled">Title</option>
                        <option value="disabled">Salary</option>
                        <option value="disabled">Manager</option>
                    </select>
                </label> */}
                <input 
                style={{padding: "7px", marginLeft: '7px'}}
                type="submit"
                value="Submit"
                onSubmit={this.props.sort}
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