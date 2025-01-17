import { configureStore } from '@reduxjs/toolkit';
import { ordersApi } from './ordersApi.js';
import ordersReducer from './ordersSlice.js';



export const resetStore = () => configureStore({
  reducer: {
    // example: exampleReducer,
    // add your reducer(s) here
    orders: ordersReducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(
    // if using RTK Query for your networking: add your middleware here
    ordersApi.middleware
    // if using Redux Thunk for your networking: you can ignore this
  ),
})

export const store = resetStore()
