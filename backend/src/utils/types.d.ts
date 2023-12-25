import mongoose, { ObjectId, Schema } from "mongoose"

export interface UserToken {
    username: string,
    password: string
}

export interface User {
    _id ?: string,
    username: string,
    password: string,
    token: string
}

export interface IUSer extends Document, User {};
export interface UserSchema extends User, Schema {};

export interface Note {
    content : string,
    user: ObjectId,
    createdAt ?: string,
    updatedAt ?: string
}
export interface NoteSchema extends Note, Document {};