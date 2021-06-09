import React from 'react'
import AboutPage from './pages/about'
import HomePage from './pages/home'
import LayoutAdmin from './layouts/admin'
import LayoutWebsite from './layouts/website'
import AdminProductPage from './admin/product/index'
import AdminProductAddPage from './admin/product/add'
import AdminCateAddPage from './admin/category/add'
import AdminCateUpdatePage from './admin/category/edit'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import ProductPage from './pages/product'
import ProductDetail from './pages/product-detail'
import Signin from './user/SignIn'
import Signup from './user/SignUp';
import AdminCategoryPage from './admin/category'
import CategoryPage from './pages/category'
import AdminProductUpdatePage from './admin/product/edit'
import AdminRoute from './auth/AdminRoute';
import PrivateRoute from './auth/PrivateRoute';
import Dashboard from './admin/Dashboard';

const Routers = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/admin/:path?/:path?/:path?">
                    <LayoutAdmin>
                        <Switch>
                            <Route exact path="admin">
                                <Redirect to="/admin/dashboard" />
                            </Route>
                            <PrivateRoute exact path="/admin/dashboard">
                                <Dashboard />
                            </PrivateRoute>
                            <AdminRoute>
                                <Route exact path="/admin/dashboard">
                                    <Dashboard />
                                </Route>
                                <Route exact path="/admin/product">
                                    <AdminProductPage {...props}/>
                                </Route>
                                <Route exact path="/admin/product/add">
                                    <AdminProductAddPage {...props} />
                                </Route>
                                <Route exact path="/admin/product/update/:id">
                                    <AdminProductUpdatePage {...props} />
                                </Route>
                                <Route exact path="/admin/category">
                                    <AdminCategoryPage {...props} />
                                </Route>
                                <Route exact path="/admin/category/add">
                                    <AdminCateAddPage {...props} />
                                </Route>
                                <Route exact path="/admin/category/update/:id">
                                    <AdminCateUpdatePage {...props} />
                                </Route>
                            </AdminRoute>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutWebsite>
                        <Switch>
                            <Route exact path="/">
                                <HomePage />
                            </Route>
                            <Route exact path="/products">
                                <ProductPage {...props} />
                            </Route>
                            <Route exact path="/categories">
                                <CategoryPage {...props} />
                            </Route>
                            <Route exact path="/product/:id">
                                <ProductDetail />
                            </Route>
                            <Route exact path="/about">
                                <AboutPage />
                            </Route>
                            <Route path="/" exact component={() => {
                                return <HomePage />
                            }} />
                            <Route path="/signin" exact component={() => {
                                return <Signin />
                            }} />
                            <Route path="/signup" exact component={() => {
                                return <Signup />
                            }} />
                        </Switch>
                    </LayoutWebsite>
                </Route>
            </Switch>
        </Router>

    )
}

export default Routers
