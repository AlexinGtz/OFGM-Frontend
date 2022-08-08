import { configureStore } from "@reduxjs/toolkit";
import concertsReducer from "./reducers/concertsReducer";
import loadingReducer from "./reducers/loadingReducer";
import screenMessageReducer from "./reducers/screenMessageReducer";
import counterReducer from "./reducers/testReducer";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        concerts: concertsReducer,
        screenMessage: screenMessageReducer,
        loading: loadingReducer,
    }
});