import React from 'react'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Employee Directory</h1>
        </header>
    )
}

const headerStyle = {
    backgroundColor: '#7395AE',
    color: 'white',
    padding: '10px'
}

export default Header