import { configureStore } from '@reduxjs/toolkit'
import ordersReducer from '.OrdersSlice'
import { OrdersApi } from '.OrdersApi'

//const ordersReducer = (state = { count: 0 }) => {
  //return state
//}

export const resetStore = () => configureStore({
  reducer: {
    ordersState: ordersReducer,
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
