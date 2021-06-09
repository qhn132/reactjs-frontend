import { Link } from 'react-router-dom'

const ListCategory = (props) => {
    console.log(props.categories); //{obj}
    return (
        <div>
            <ul className="list-group">
                {props.categories.map((category,index) => {
                    return <li className="list-group-item d-flex justify-content-between" key={index}>
                        <Link to={`/category/${category._id}`}>{category.name}</Link>
                        
                        <button className="btn btn-danger btn-sm">
                            <Link to={`/admin/category/update/${category._id}`}>update</Link></button>
                        <button className="btn btn-danger btn-sm"
                            onClick={() => { props.onCateDelete(category._id) }}>delete</button>
                    </li>
                })
                }
            </ul>
        </div>
    )
}
export default ListCategory;