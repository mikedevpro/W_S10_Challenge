import { configureStore } from '@reduxjs/toolkit';
import { OrdersApi } from './ordersApi.js';
import ordersReducer from './ordersSlice.js';

// const exampleReducer = (state = {count: 0}) => {
//   return state
// }

export const resetStore = () => configureStore({
  reducer: {
    // example: exampleReducer,
    // add your reducer(s) here
    orders: ordersReducer,
    [OrdersApi.reducerPath]: OrdersApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(
    // if using RTK Query for your networking: add your middleware here
    OrdersApi.middleware
    // if using Redux Thunk for your networking: you can ignore this
  ),
})

export const store = resetStore()
