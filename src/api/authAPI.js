import { axiosClient } from './axiosClient';

const AuthAPI = {
    signup(data) {
        const url = `/signup`;
        return axiosClient.post(url, data, {
            headers: { "Content-Type": "application/json; charset=utf-8" }
        })
    },
    signin(data) {
        const url = `/signin`;
        return axiosClient.post(url, data, {
            headers: { "Content-Type": "application/json; charset=utf-8" }
        })
    },
    signout() {
        const url = `/signout`;
        return axiosClient.get(url)
    }
}
export default AuthAPI;