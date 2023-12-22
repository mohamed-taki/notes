import React, { ChangeEvent } from "react"

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

export const stdFormStatesOnChange = (e:ChangeEvent<HTMLInputElement>, state:any , setState: any) => {
    setState({
        ...state,
        [e.target.name] : e.target.value
    })
}

export interface Note {
    content: string,
    creationDate : string,
    modificationDate ?: string,
}

export interface NoteProps {
    note: Note
}