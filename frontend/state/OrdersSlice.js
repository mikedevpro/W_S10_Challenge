import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: 'orders',
  initialState: { size: 'All' },
  reducers: {
    selectSize: (state, action) => {
      state.size = action.payload
    }
    },
})


export const selectSize = (state) => state;
export default ordersSlice.reducer
