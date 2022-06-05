import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", email: "", picture: "" };

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
    update:(state,action)=>{
      state.value = action.payload;

    }
  },
});

export const { loginr, logoutr,update } = userSlice.actions;

export default userSlice.reducer;
