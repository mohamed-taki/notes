import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer, { checkUserToken, authUser } from '../features/auth/authSlice';
import notesReducer from '../features/notes/notesSlice';
import { User } from '../helpers/types';

export const store = configureStore({
  reducer: {
    auth : authReducer,
    notes: notesReducer,
  },
});

store.dispatch(checkUserToken(authUser));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
