import React from 'react'
import Header from '../components/headerAdmin'

const LayoutAdmin = (props) => {
    return (
        <div className="row">
            {/* <div className="col-md-4">
                <Header/>
            </div> */}
            <div className="col-8">
                {props.children}
            </div>
            
        </div>
    )
}

export default LayoutAdmin
