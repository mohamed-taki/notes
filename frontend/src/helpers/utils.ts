import { AxiosRequestConfig } from "axios"
import { User } from "./types"

export const setStdRequestConfig = (token : User['token']) : AxiosRequestConfig => {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}