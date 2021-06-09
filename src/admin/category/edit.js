import React, { useEffect, useState } from 'react'
import { set, useForm } from 'react-hook-form'
import { useHistory, useParams } from 'react-router-dom'
import CategoryAPI from '../../api/categoryAPI'

const AdminCateUpdatePage = ({ onCateUpdate }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const history = useHistory();
    const [category, setCategory] = useState({});
    let { id } = useParams();
    useEffect(() => {
        // call API
        const getCategories = async () => {
            try {
                const { data } = await CategoryAPI.get(id);
                setCategory(data)
                reset(data)
            } catch (error) {
                console.log(error)
            }
        }
        getCategories();
    }, [])
    const onHandleSubmit = (data) => {
        console.log(data)
        const uploads = new FormData();
        uploads.append("name", data.abc);
        // uploads.append("photo", data.image[0]);
        onCateUpdate(id, uploads);
        history.push('/admin/category');
    }

    return (
        <div>
            <h1>Cate update</h1>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        id="category-name"
                        placeholder="Tên sản phẩm"
                        defaultValue={category.name}
                        {...register('abc', { required: true })}
                    />
                    <label htmlFor="category-name">Tên danh muc</label>
                    {errors.name && <span className="text-danger mt-2">This field is required</span>}
                </div>
                {/* <div className="form-floating mb-3">
                    <input type="file"
                        className="form-control"
                        id="product-category"
                        placeholder="Tên danh mục"
                        {...register('image', { required: true })}
                    />
                    <label htmlFor="product-name">Img</label>
                    {errors.name && <span className="text-danger mt-2">This field is required</span>}
                </div> */}

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AdminCateUpdatePage
