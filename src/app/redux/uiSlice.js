import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "UI",
  initialState: {
    theme: "light",
  },
  reducers: {
    themeFn: (state, action) => {
      state.theme = action.payload;
    },
  },
});

const uiReducer = uiSlice.reducer;
const uiState = (state) => state.ui;
const { themeFn } = uiSlice.actions;

export { uiReducer, uiState, themeFn };
