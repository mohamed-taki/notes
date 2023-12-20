import { User } from "../../helpers/types";
import axios from "axios";
export const doLogin = (user:User) => {
    console.log(user.username);
    console.log(user.password);
}

const API_URL = process.env.REACT_APP_BACKEND_URL ? process.env.REACT_APP_BACKEND_URL : "localhost:5000"

export const doSignupUser = async (user:User) => {
    const res = await axios.post(API_URL + "/api/users/signup", user);
    return res.data;
}