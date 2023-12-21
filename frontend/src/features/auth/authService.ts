import { User } from "../../helpers/types";
import axios from "axios";
const API_URL = process.env.REACT_APP_BACKEND_URL ? process.env.REACT_APP_BACKEND_URL : "localhost:5000/api"

export const doLogin = async (userInfo:User) => {
    console.log(API_URL)
    const user = await axios.post(API_URL + "/users/login", userInfo);
    return user.data;
}


export const doSignupUser = async (user:User) => {
    const res = await axios.post(API_URL + "/users/signup", user);
    return res.data;
}

// export const doLogout = () => {
//     return localStorage.removeItem('user');
// }