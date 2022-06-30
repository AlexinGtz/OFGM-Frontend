import { configureStore } from "@reduxjs/toolkit";
import concertsReducer from "./reducers/concertsReducer";
import counterReducer from "./reducers/testReducer";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        concerts: concertsReducer,
    }
});