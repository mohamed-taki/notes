import { ThunkAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Note, NotesInitialeState } from "../../helpers/types";
import { RootState } from "../../app/store";

import {
  addUserNote,
  deleteNoteById,
  getCurrentUserNotes,
  updateUserNote,
} from "./notesService";

export const getNotes = createAsyncThunk("notes/get", async (_, thunkAPI) => {
  const { auth } = thunkAPI.getState() as RootState;

  console.log(auth)
  if (auth.user) {
    return await getCurrentUserNotes(auth.user.token);
  } else {
    console.error("Authentication failed.");
    return thunkAPI.rejectWithValue("Authentication failed.");
  }
});

export const addNewNote = createAsyncThunk(
  "notes/add",
  async (notesData: Note, thunkAPI) => {
    const { auth } = thunkAPI.getState() as RootState;
    if (auth.user) {
      return await addUserNote(notesData, auth.user.token);
    } else {
      console.error("Authentication failed.");
    }
  }
);

export const updateNote = createAsyncThunk("notes/update", async (note: Note, thunkAPI) => {
    const { auth } = thunkAPI.getState() as RootState;
    return updateUserNote(note, auth.user?.token);
  }
);

export const deleteNote = createAsyncThunk("notes/delete", async (noteId:Note['_id'], thunkAPI) => {
  const {auth} = thunkAPI.getState() as RootState;
  try {
    return await deleteNoteById(noteId, auth.user?.token); 
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const initialState: NotesInitialeState = {
  notes: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNotes.fulfilled, (state, action) => {
      state.notes = action.payload.notes;
    });
    builder.addCase(getNotes.rejected, (state, action) => {

    });
    builder.addCase(addNewNote.fulfilled, (state, action) => {
      state.notes.push(action.payload.note);
    });
    
    builder.addCase(updateNote.fulfilled, (state, action) => {
      for (let i = 0; i < state.notes.length; i++) {
        if(state.notes[i]._id === action.payload.note._id){
          state.notes[i] = action.payload.note
        }
      }
    });

    builder.addCase(deleteNote.fulfilled, (state, action) => {
      state.notes = state.notes.filter( note => note._id !== action.payload.note._id );
    });
  },
});

export default notesSlice.reducer;
