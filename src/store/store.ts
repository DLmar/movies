import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    movieReducer,
    genreReducer
})

const setupStore = () => configureStore({
    reducer: rootReducer
})
