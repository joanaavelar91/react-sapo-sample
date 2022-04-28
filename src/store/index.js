import { configureStore } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";

import { createBrowserHistory } from "history";

// First Reducers
import firstSectionReducer from "./FirstSection/square/reducer";

export const history = createBrowserHistory();

export const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    router: connectRouter(history),

    // firstSectionRed Reducers
    firstSectionRed: firstSectionReducer,
  },
});
