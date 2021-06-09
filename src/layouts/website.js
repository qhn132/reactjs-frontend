import React from 'react'
import Header from '../components/header'

const website = (props) => {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    )
}

export default website
