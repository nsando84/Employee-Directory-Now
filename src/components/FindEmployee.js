import React, { Component  } from 'react'
import Aux from '../hoc/Aux'
import './Employees.css'
import Modal from './layout/UI/Modal'
import UpdateEmployee from './UpdateEmployee'

class FindEmployee extends Component {

   state = {
        updateModal: false
   }

    employeeCancelHandler = (e) => {
        this.setState({updateModal: false})
    }

    updateHander = (e) => {
        e.preventDefault()
        this.setState({updateModal: true})
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
                />
                <input 
                style={{padding: "7px", marginLeft: '7px'}}
                type="submit"
                value="Search"
                onClick={this.updateHander}
                />
            </form>
            <Modal show={this.state.updateModal} modalClosed={this.employeeCancelHandler}>
                <UpdateEmployee firstname="" lastname="" title="" salary="" manager="" />
            </Modal>
            </Aux>
        )
    }
}

const formStyle = {
    margin: 'auto',
    marginTop: '20px',
    width: '600px'
}



export default FindEmployee