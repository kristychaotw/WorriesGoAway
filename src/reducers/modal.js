import { createSlice } from "@reduxjs/toolkit";

const initialState = { show: false, headlines: "", msg: "" };

export const modalSlice = createSlice({
  name: "modal",
  initialState: { value: initialState },
  reducers: {
    openModal: (state, action) => {
      state.value = action.payload;
    },
    closeModal: (state) => {
      state.value = initialState;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
