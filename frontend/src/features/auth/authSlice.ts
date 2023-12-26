import { createAsyncThunk, createAction, createSlice, ActionCreator, AsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { User, authSliceInterface } from "../../helpers/types";
import { RootState } from "../../app/store";
import { doLogin, doSignupUser } from "./authService";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const storedUser = localStorage.getItem('user');
const user = storedUser ? JSON.parse(storedUser) : null;

const initialState : authSliceInterface = {
    user,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const loginUser = createAsyncThunk(
    'auth/login', 
    async (loginInfo: User, thunkAPI) => {
        try {
            return await doLogin(loginInfo);
           } catch (error:any) {
            const message = (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString()
            return thunkAPI.rejectWithValue(message)
           }
    }
)

export const signupUser = createAsyncThunk(
    'auth/signup',
    async (signupInfo:User, thunkAPI) => {
       try {
        return await doSignupUser(signupInfo);
       } catch (error:any) {
        const message = (error.response && error.response.data && error.response.data.message) 
                        || error.message || error.toString();
        return thunkAPI.rejectWithValue(message)
       }
    }
)

// export const logoutMyUser = createAsyncThunk("auth/logout", () => {
//     console.log(localStorage);
//     return localStorage.removeItem('user');
// })

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        },
        logoutMyUser: (state) => {
            localStorage.removeItem('user');
            state.user = null;
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(signupUser.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            localStorage.setItem('user', JSON.stringify(state.user));
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isError = true;
            state.message = String(action.payload);
        })

        // ------------------------------------------

        builder.addCase(signupUser.fulfilled, (state, action:PayloadAction<{user:User}>) => {
            state.user = action.payload.user;
            localStorage.setItem('user', JSON.stringify(state.user));
            // state.isSuccess = true;
        })
        builder.addCase(signupUser.rejected, (state, action) => {
            state.isError = true;
            console.log(action);
            state.message = String(action.payload);
            // state.isSuccess = true;
        })
        
        // ------------------------------------------
        // builder.addCase(logoutMyUser.fulfilled, (state, action) => {
        //     state.isError = false;
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.message = "";
        //     state.user = null;
        // })
    }
})

export const { reset, logoutMyUser } = authSlice.actions
export default authSlice.reducer