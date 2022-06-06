import { createSlice } from "@reduxjs/toolkit";
import avatarSVG from "../components/images/icons/avatar.svg"
const initialState = { name: "", email: "", picture: `${avatarSVG}` };

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
      state.value.picture= action.payload.picture;
      

    }
  },
});

export const { loginr, logoutr,update } = userSlice.actions;

export default userSlice.reducer;
