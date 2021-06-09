import { axiosClient } from './axiosClient';
import { isAuthenticated } from '../auth/index';
const { user, token } = isAuthenticated()
// import { headers} from '../ultis';

const CategoryAPI = {
    getAll() {
        const url = `/category`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/category/${id}`;
        return axiosClient.get(url);
    },
    add(id,cate) {
        const url = `/category/add/${id}`;
        return axiosClient.post(url, cate,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    },
    remove(id) {
        const url = `/category/${id}/${user._id}`;
        return axiosClient.delete(url);
    },
    update(id, data) {
        const url = `/category/${id}/${user._id}`;
        return axiosClient.put(url, data);
    }
}
export default CategoryAPI;