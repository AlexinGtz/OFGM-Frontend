import { configureStore } from "@reduxjs/toolkit";
import concertsReducer from "./reducers/concertsReducer";
import screenMessageReducer from "./reducers/screenMessageReducer";
import counterReducer from "./reducers/testReducer";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        concerts: concertsReducer,
        screenMessage: screenMessageReducer,
    }
});