import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  mode: "light",
};
export const themeSlice = createSlice({
  name: "themeSlice",
  initialState: INITIAL_STATE,
  reducers: {
    changeTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      return state;
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
      return state;
    },
  },
});
export const { changeTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
