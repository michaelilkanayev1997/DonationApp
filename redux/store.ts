import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import userReducer from './reducers/User';

// Combine all your reducers
const rootReducer = combineReducers({
  user: userReducer,
});

// Configure redux-persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

// Wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store using the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }).concat(logger),
});

// Create the persistor
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
