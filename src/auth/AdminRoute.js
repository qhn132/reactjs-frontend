import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '.';
import Header from '../components/headerAdmin'

const AdminRoute = ({ children }) => {
    return (
        <div className="row">
            <div className="col-4">
            <Header/>
            </div>
            <div className="col-8">
                <Route
                    render={() =>
                        isAuthenticated() && isAuthenticated().user.role === 1 ? (
                            children
                        ) : (
                            <Redirect
                                to={{ pathname: "/signin" }}
                            />
                        )
                    }
                />
            </div>
        </div>
    )
}

export default AdminRoute
