import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import userReducer from "./slice/userSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const combinedReducers = combineReducers({
  user: userReducer,
});

const persistReduce = persistReducer(persistConfig, combinedReducers);

const store = configureStore({
  reducer: {
    reducer: persistReduce,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
