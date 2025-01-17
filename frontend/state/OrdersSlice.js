import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: 'orders',
  initialState: { 
    size: 'All'
  },
  reducers: {
    filterChange(state, action) {
      state.size = action.payload;
    },
  },
});

export const { filterChange } = ordersSlice.actions;

export default ordersSlice.reducer;

