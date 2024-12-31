import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 1,
  },
  reducers: {
    increaseCounter: (state, action) => {
      state.count = state.count + action.payload;
    },
    //actions
  },
});

export const { increaseCounter } = counterSlice.actions;

export default counterSlice.reducer;
