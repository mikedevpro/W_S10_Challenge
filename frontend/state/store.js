import { configureStore } from '@reduxjs/toolkit'
import { OrdersApi } from './ordersApi'

export const resetStore = () => configureStore({
  reducer: {
    // add your reducer(s) here
    [OrdersApi.reducerPath]: OrdersApi.reducer
  },
  middleware: getDefault => getDefault().concat(
    // if using RTK Query for your networking: add your middleware here
    OrdersApi.middleware
    // if using Redux Thunk for your networking: you can ignore this
  ),
})

export const store = resetStore()
