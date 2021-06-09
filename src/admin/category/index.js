import React from 'react'
import { NavLink } from 'react-router-dom'
import ListCategory from '../../components/ListCategory'

const AdminCategoryPage = (props) => {
    return (
        <div>
            <h2><NavLink to="category/add">Them danh muc</NavLink></h2>
            <ListCategory {...props}/>
        </div>
    )
}

export default AdminCategoryPage
