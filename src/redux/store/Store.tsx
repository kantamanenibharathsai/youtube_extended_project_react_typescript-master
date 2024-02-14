import { configureStore, combineReducers } from "@reduxjs/toolkit";
import youtubePlayer from "../features/Slice"
import CredentialsSlice from "../features/CredentialsSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  credentials: CredentialsSlice,
  player: youtubePlayer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
});

export const persister = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;








// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import videoReducer from "../VideosSlice";
// import userReducer from "../userSlice";
// import storage from "redux-persist/lib/storage";

// import { persistReducer, persistStore } from "redux-persist";
// const persistConfig = {
//   key: "root",
//   storage,
// };
// const rootReducer = combineReducers({
//   videos: videoReducer,
//   users: userReducer,
// });
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
// });
// export const persister = persistStore(store);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;