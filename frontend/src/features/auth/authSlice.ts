import { createAsyncThunk, createAction, createSlice, ActionCreator, AsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { User, authSliceInterface } from "../../helpers/types";
import { RootState } from "../../app/store";
import { doSignupUser } from "./authService";

// const storedUser = localStorage.getItem('user');
// const user = storedUser ? JSON.parse(storedUser) : null;

const initialState : authSliceInterface = {
    user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const loginUser = createAsyncThunk(
    'auth/login', 
    async (loginInfo: {username: string, password: string}, thunkAPI) => {
        return loginInfo;
    }
)

export const signupUser = createAsyncThunk(
    'auth/signup',
    async (signupInfo:User) => {
        const signupRes = await doSignupUser(signupInfo);
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
          },
    },
    extraReducers: (builder) =>{
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload;
        })
        builder.addCase(signupUser.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(signupUser.fulfilled, (state, action) => {
            state.user = action.payload.user
            // state.isSuccess = true;
        })
    }
})

export const { reset } = authSlice.actions
export default authSlice.reducer