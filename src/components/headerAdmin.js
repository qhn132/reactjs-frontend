import React from 'react'
import {Link} from 'react-router-dom'

const headerAdmin = () => {
    return (
        <div className="card">
                <h4 className="card-header">Admin links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/category">List Category</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/product">List Product</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/dashboard">Info Account</Link>
                    </li>
                </ul>
            </div>
    )
}

export default headerAdmin
