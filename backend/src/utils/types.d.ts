import { Schema } from "mongoose"

export interface UserToken {
    username: string,
    password: string
}

export interface User {
    username: string,
    password: string
}

export interface UserSchema extends User, Schema {};