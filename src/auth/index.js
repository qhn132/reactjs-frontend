import { API } from '../config';
export const signUp = (user) => {
    return fetch(`${API}/signup`, {
        method: 'POST',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}
export const signIn = (user) => {
    return fetch(`${API}/signin`, {
        method: 'POST',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}
export const authenticate = (data, next) => {
    if(typeof window !== 'undefined'){
        localStorage.setItem('user', JSON.stringify(data))
        next();
    }
}
export const isAuthenticated = () => {
    if (typeof window == "undefined") {
        return false
    }
    if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'))
    } else {
        return false
    }
}