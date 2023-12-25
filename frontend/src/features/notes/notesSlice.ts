import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Note, NotesInitialeState } from "../../helpers/types";
import { AppThunk, RootState } from "../../app/store";
import { addUserNote, getCurrentUserNotes } from "./notesService";



export const getNotes = createAsyncThunk("notes/get", async (_, thunkAPI) => {
    const {auth} = thunkAPI.getState() as RootState;
    if(auth.user){
        return await getCurrentUserNotes(auth.user.token);
    }else{
        console.error("Authentication failed.");
    }
})

export const addNewNote = createAsyncThunk("notes/add", async(notesData:Note, thunkAPI) => {
    const {auth} = thunkAPI.getState() as RootState;
    if(auth.user){
        return await addUserNote(notesData, auth.user.token);
    }else{
        console.error("Authentication failed.");
    }
})
const initialState:NotesInitialeState = {
    notes: []
};
const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getNotes.fulfilled, (state, action) => {
            state.notes = action.payload.notes;
        })
        builder.addCase(addNewNote.fulfilled, (state, action) => {
            state.notes.push(action.payload.note);
        })
    }
})

export default notesSlice.reducer;