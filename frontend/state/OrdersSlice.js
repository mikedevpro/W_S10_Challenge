import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'count_state',
  initialState: { count: 0 },
  reducers: {
    increment(state) {
      state.count++
},
    },
})


export default slice.reducer
export const { increment } = slice.actions