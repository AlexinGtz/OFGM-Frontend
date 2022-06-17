import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/testReducer";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
});