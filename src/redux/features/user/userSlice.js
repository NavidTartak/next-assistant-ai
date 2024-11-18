import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  userData: "",
};
export const userSlice = createSlice({
  name: "userSlice",
  initialState: INITIAL_STATE,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
      return state;
    },
    removeUserData: (state) => {
      state.userData = "";
      return state;
    },
  },
});
export const { setUserData, removeUserData } = userSlice.actions;
export default userSlice.reducer;
