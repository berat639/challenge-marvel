import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Action, combineReducers } from 'redux';
import { createWrapper } from "next-redux-wrapper";
import charactersReducer from "./reduxSlices/characters";
import { useDispatch } from "react-redux";


const rootReducer = combineReducers({
    characters: charactersReducer
})

const makeStore = () =>
    configureStore({
        reducer: rootReducer,
        devTools: true,
    });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = ReturnType<typeof makeStore>
export const useAppDispatch = () => useDispatch<AppDispatch>()

export const wrapper = createWrapper<AppStore>(makeStore);

