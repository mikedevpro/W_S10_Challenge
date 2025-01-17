import { createSlice } from "@reduxjs/toolkit";

const OrdersSlice = createSlice({
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

export const { filterChange } = OrdersSlice.actions;

export default OrdersSlice.reducer;

