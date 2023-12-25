import React, { ChangeEvent } from "react"

export interface authSliceInterface {
    user: User | null,
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message: string,
}

export interface User {
    username: string, 
    password: string,
    _id ?: string,
    token ?: string,
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
    user ?: User['_id'],
    createdAt ?: string, 
    updatedAt ?: string,
}

export interface NoteProps {
    note: Note
}

export interface NotesInitialeState {
    notes: Note[]
}