import React, { useEffect, useState } from 'react'
import { set, useForm } from 'react-hook-form'
import { useHistory, useParams } from 'react-router-dom'
import ProductAPI from '../../api/productAPI'

const AdminCateUpdatePage = ({ onUpdate }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const history = useHistory();
    const [product, setProduct] = useState({});
    let { id } = useParams();
    useEffect(() => {
        // call API
        const getProducts = async () => {
            try {
                const { data } = await ProductAPI.get(id);
                setProduct(data)
                reset(data)
            } catch (error) {
                console.log(error)
            }
        }
        getProducts();
    }, [])
    const onHandleSubmit = (data) => {
        console.log(data)
        const uploads = new FormData();
        uploads.append("name", data.name);
        uploads.append("category", data.category);
        uploads.append("price", data.price);
        uploads.append("description", data.description);
        uploads.append("shipping", data.shipping);
        onUpdate(id, uploads);
        history.push('/admin/product');
    }

    return (
        <div>
            <h1>Product update</h1>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        id="product-name"
                        placeholder="Tên sản phẩm"
                        defaultValue={product.name}
                        {...register('name', { required: true })}
                    />
                    <label htmlFor="product-name">Tên sản phẩm</label>
                    {errors.name && <span className="text-danger mt-2">This field is required</span>}
                </div>
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        id="product-category"
                        placeholder="Tên danh mục"
                        defaultValue={product.category}
                        {...register('category', { required: true })}
                    />
                    <label htmlFor="product-name">Danh mục</label>
                    {errors.name && <span className="text-danger mt-2">This field is required</span>}
                </div>
                <div className="form-floating mb-3">
                    <input type="number"
                        className="form-control"
                        id="product-price"
                        placeholder="Giá sản phẩm"
                        {...register('price', { required: true })}
                    />
                    <label htmlFor="product-price">Giá sản phẩm</label>
                    {errors.name && <span className="text-danger mt-2">This field is required</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="product-desc">Mô tả sản phẩm</label>
                    <textarea type="number"
                        className="form-control"
                        id="product-desc"
                        {...register('description', { required: true })}
                    ></textarea>
                    {errors.desc && <span className="text-danger mt-2">This field is required</span>}
                </div>
                <div className="mb-3">
                    <input type="checkbox" {...register('shipping')} /> Shipping
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AdminCateUpdatePage
