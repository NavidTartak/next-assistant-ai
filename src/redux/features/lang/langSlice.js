import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  lang: "en",
};
export const langSlice = createSlice({
  name: "langSlice",
  initialState: INITIAL_STATE,
  reducers: {
    changeLang: (state) => {
      state.lang = state.lang === "en" ? "fa" : "en";
      return state;
    },
    setLang: (state, action) => {
      state.lang = action.payload;
      return state;
    },
  },
});
export const { changeLang, setLang } = langSlice.actions;
export default langSlice.reducer;
