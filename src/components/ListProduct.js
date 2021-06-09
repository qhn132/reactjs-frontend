import { Link } from 'react-router-dom'

const ListProduct = (props) => {
    // console.log(props); //{obj}
    return (
        <div>
            <ul className="list-group">
                {props.products.map((product, index) => {
                    return <li className="list-group-item d-flex justify-content-between" key={index}>
                        <Link to={`/product/${product._id}`}>{product.name}</Link>
                        <button className="btn btn-danger btn-sm">
                            <Link to={`/admin/product/update/${product._id}`}>update</Link></button>
                        <button className="btn btn-danger btn-sm"
                            onClick={() => { props.onDelete(product._id) }}>delete</button>
                    </li>
                })
                }
            </ul>
        </div>
    )
}
export default ListProduct;