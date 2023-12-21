import { Schema } from "mongoose"

export interface UserToken {
    username: string,
    password: string
}

export interface User {
    username: string,
    password: string,
    token: string
}

export interface IUSer extends Document, User {};
export interface UserSchema extends User, Schema {};