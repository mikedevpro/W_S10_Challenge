import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: 'orders',
  initialState: { size: 'All' },
  reducers: {
    setSize: (state, action) => {
      state.size = action.payload
    }
    },
})


export const selectSize = (state) => state.filter.size;
export default ordersSlice.reducer
