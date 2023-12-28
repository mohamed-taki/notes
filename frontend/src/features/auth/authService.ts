import { User } from "../../helpers/types";
import axios from "axios";
import { setStdRequestConfig } from "../../helpers/utils";
const API_URL = process.env.REACT_APP_BACKEND_URL ? process.env.REACT_APP_BACKEND_URL : "localhost:5000/api"

export const doLogin = async (userInfo:User) => {
    const user = await axios.post(API_URL + "/users/login", userInfo);
    return user.data;
}


export const doSignupUser = async (user:User) => {
    const res = await axios.post(API_URL + "/users/signup", user);
    return res.data;
}

export const checkIsUserTokenValid = async (token:User['token']) => {
    const config = setStdRequestConfig(token);
    const tokenUser = await axios.post(API_URL + "/users/checkToken", [], config);
    return tokenUser.data
}

// export const doLogout = () => {
//     return localStorage.removeItem('user');
// }