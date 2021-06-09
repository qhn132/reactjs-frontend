import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { isAuthenticated } from '../../auth/index'

const AdminCateAddPage = ({ onCateAdd}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const { user } = isAuthenticated();
    const onHandleSubmit = (data) => {
        // console.log(data)
        const uploads = new FormData();
        uploads.append("name", data.nameCate);
        uploads.append("photo", data.image[0]);
        onCateAdd(user._id,uploads);
        history.push('/admin/category');
    }

    return (
        <div>
            <h1>CAte Add</h1>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        id="category-name"
                        placeholder="Tên sản phẩm"
                        {...register('nameCate', { required: true })}
                    />
                    <label htmlFor="category-name">Tên danh muc</label>
                    {errors.name && <span className="text-danger mt-2">This field is required</span>}
                </div>
                <div className="form-floating mb-3">
                    <input type="file"
                        className="form-control"
                        id="product-category"
                        placeholder="Tên danh mục"
                        {...register('image', { required: true })}
                    />
                    <label htmlFor="product-name">Img</label>
                    {errors.name && <span className="text-danger mt-2">This field is required</span>}
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AdminCateAddPage
