import React from 'react'
import { NavLink } from 'react-router-dom'
import ListProduct from '../../components/ListProduct'

const AdminProductPage = (props) => {
    return (
        <div>
            <h2><NavLink to="product/add">Them san pham</NavLink></h2>
            <ListProduct {...props}/>
        </div>
    )
}

export default AdminProductPage
