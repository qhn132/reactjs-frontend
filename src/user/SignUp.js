import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { signUp } from '../auth';


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const onSubmit = (data, e) => {
        signUp(data)
            .then(dataInput => {
                if (dataInput.error) {
                    setError(dataInput.error);
                } else {
                    e.target.reset()
                    setError("");
                    setSuccess(true)
                }
            })

    }
    const showError = () => {
        return <div className="alerl alerl-danger" style={{ display: error ? "block" : "none" }}>
            {error}
        </div>
    }
    const showSucces = () => {
        return <div className="alerl alerl-info" style={{ display: success ? "block" : "none" }}>
            bạn đã tạo tài khoản thành công . Click để <Link to="/signin">đăng nhập</Link>
        </div>
    }
    const signUpForm = () => {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Tên đăng nhập</label>
                    <input type="text"
                        className="form-control"
                        id="name"
                        {...register('name')}
                    />
                </div>
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
                <button className="btn btn-primary">Đăng ký</button>

            </form>
        )
    }

    return (
        <div>
            {showError()}
            {showSucces()}
            {signUpForm()}
        </div>
    )
}

export default SignUp
