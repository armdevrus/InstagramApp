import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {logger} from "redux-logger";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import currentUser from "../features/currentUser/currentUserSlice";
import loggedInUser from "../features/loggedinUser/loggedInUserSlice";

const rootReducer = combineReducers({
    currentUser: currentUser,
    loggedInUser: loggedInUser
})

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(logger)
})

const persistor = persistStore(store)

export {
    persistor,
    store
}
