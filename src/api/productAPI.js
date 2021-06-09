import { axiosClient } from './axiosClient';
// import { headers} from '../ultis';
import { isAuthenticated } from '../auth/index';
const { user, token } = isAuthenticated()
// console.log(user)

const ProductAPI = {
    getAll(id) {
        const url = `/products`;
        return axiosClient.get(url, id);
    },
    get(id) {
        const url = `/product/${id}`;
        return axiosClient.get(url);
    },
    add(id, product) {
        const url = `/product/add/${id}`;
        // console.log(headers())
        return axiosClient.post(url, product, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    },
    remove(id) {
        const url = `/product/${id}/${user._id}`;
        return axiosClient.delete(url);
    },
    update(id, data) {
        const url = `/product/${id}/${user._id}`;
        return axiosClient.put(url, data);
    },
    getListWithCate(id) {
        const url = `/products/related/${id}`;
        return axiosClient.get(url)
    }

}
export default ProductAPI;