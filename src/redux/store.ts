import { sessionsSlice } from './session/reducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { expensivesSlice } from './expensives/reducer';
import { usersSlice } from './users/reducer';

export const store = configureStore({
  reducer: {
    session: sessionsSlice.reducer,
    expensives: expensivesSlice.reducer,
    users: usersSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
