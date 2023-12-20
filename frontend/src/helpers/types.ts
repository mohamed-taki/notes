export interface authSliceInterface {
    user: any,
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message: string,
}

export interface User {
    username: string, 
    password: string,
}

export interface StdAlertProps{
    show?: boolean,
    title?: string,
    message?: string,
    type: "danger" | "primary" | "secondary" |"success" |"danger" |"warning" |"info" |"light" |"dark"
}