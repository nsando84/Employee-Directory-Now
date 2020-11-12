import React from 'react'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Employee Directory</h1>
        </header>
    )
}

const headerStyle = {
    backgroundColor: '#557A95',
    color: 'white',
    padding: '17px',
    textAlign: 'left'
}

export default Header