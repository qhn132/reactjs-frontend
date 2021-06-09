import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory, Redirect } from 'react-router-dom';
import { signIn, authenticate, isAuthenticated } from '../auth';


const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)
    const { user } = isAuthenticated();

    const onSubmit = (data) => {
        setLoading(true);
        signIn(data)
            .then(dataUser => {
                if (dataUser.error) {
                    setError(dataUser.error);
                    setLoading(false);
                } else {
                    authenticate(dataUser, () => {
                        history.push('/admin')
                    })
                }

            })

    }
    const showError = () => {
        return <div className="alerl alerl-danger" style={{ display: error ? "block" : "none" }}>
            {error}
        </div>
    }
    const showLoading = () => {
        return loading && <div className="alerl alerl-info">
            <h2>Loading...</h2>
        </div>
    }
    const signInForm = () => {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email"
                        className="form-control"
                        id="email"
                        {...register('email')}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Mật khẩu</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        {...register('password')}
                    />
                </div>
                <button className="btn btn-primary">Đăng nhập</button>

            </form>
        )
    }
    
    return (
        <div>
            {showError()}
            {showLoading()}
            {signInForm()}
        </div>
    )
}

export default SignIn
