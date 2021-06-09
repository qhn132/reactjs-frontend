import React from 'react'
import {NavLink} from 'react-router-dom'

const header = () => {
    return (
        <div>
            <ul>
                <li><NavLink to="/">Home page</NavLink></li>
                <li><NavLink to="/products">Product page</NavLink></li>
                <li><NavLink to="/admin">Admin</NavLink></li>
            </ul>
        </div>
    )
}

export default header
