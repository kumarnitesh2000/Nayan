import React from 'react'

export const Header = () => {

    const headerStyle = {
        display: "flex",
        width: '100%',
        padding: '2%',
        backgroundColor: "#404851",
        color: 'white',
        textAlign: 'center'
    }

    return(
        <div style={headerStyle}>
            <h1>Nayan Events</h1>
            <div style={{float: "right",display: "flex",marginLeft: "900px"}}>
            <h3>Home</h3>
            <h3 style={{marginLeft: "20px"}}>About</h3>
            <h3 style={{marginLeft: "20px"}}>Gallery</h3>
            <h3 style={{marginLeft: "20px"}}>Events</h3>
            <h3 style={{marginLeft: "20px"}}>Contact us</h3>
            </div>
        </div>
    )
}