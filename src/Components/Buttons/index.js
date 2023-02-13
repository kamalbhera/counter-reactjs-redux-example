import React from 'react'

const Button = ({onClick,name}) => {
    return (
        <div>
            <button className='btn-css' onClick={onClick}>{name}</button>
        </div>
    )
}

export default Button;
