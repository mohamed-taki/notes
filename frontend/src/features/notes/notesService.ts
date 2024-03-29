import axios from "axios";
import { Note, User } from "../../helpers/types";
import { setStdRequestConfig } from "../../helpers/utils";
const API_URL = process.env.REACT_APP_BACKEND_URL + "/notes/";

export const getCurrentUserNotes = async (token:User['token']) => {
    const config = setStdRequestConfig(token);
    const res = await axios.get(API_URL, config);
    return res.data;
}


export const addUserNote = async (noteData:Note, token:User['token']) => {
    const config = setStdRequestConfig(token);
    const noteRes = await axios.post(API_URL, noteData, config);
    return noteRes.data
}

export const updateUserNote = async (note:Note, token:User['token']) => {
    const config = setStdRequestConfig(token);
    const noteRes = await axios.put(API_URL, note, config);

    return noteRes.data;
}

export const deleteNoteById = async (noteId : Note['_id'], token : User['token']) => {
    const config = setStdRequestConfig(token);
    const noteRes = await axios.delete(API_URL + `/${noteId}`, config);
    return noteRes.data;
}