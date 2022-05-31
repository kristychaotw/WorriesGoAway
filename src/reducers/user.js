import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialState },
  reducers: {
    loginr: (state, action) => {
      state.value = action.payload;
    },
    logoutr: (state) => {
      state.value = initialState;
    },
  },
});


export const { loginr, logoutr } = userSlice.actions;

export default userSlice.reducer;
