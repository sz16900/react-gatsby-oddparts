import React from 'react'

const Footer = ({lastName, toggleColor, color}) => {
    return (
        <div style={{backgroundColor:'red'}}>
        This is the footer with the last name = {lastName}
        <button onClick={()=>{ 
            toggleColor();
            console.log(color)}}>Click me</button>
        </div>
    )
}

export default Footer