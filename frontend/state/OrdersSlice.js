import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: 'filter',
  initialState: { size: 'All' },
  reducers: {
    setSize: (state, action) => {
      state.size = action.payload
    }
    },
})

export const { increment } = ordersSlice.actions;
export const selectSize = (state) => state.filter.size;
export default ordersSlice.reducer
