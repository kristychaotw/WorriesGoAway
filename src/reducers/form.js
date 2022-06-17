import { createSlice } from "@reduxjs/toolkit";



const formInitialState = {
  id: "",
  tag: "",
  title: "",
  rating: "",
  worry: "",
  animal: "",
  createDate: "default",
  endDate: "",
  error: "",
  isComplete: false,
  author: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState: { value: formInitialState },
  reducers: {
    updateNote: (state, action) => {
      let item = Object.keys(action.payload)[0];
      let itemValue = Object.values(action.payload)[0];
      state.value[item] = itemValue;
    },
    saveNote: (state) => {
      state.value.isComplete = true;
    },
    clearUpNote: (state) => {
      state.value = formInitialState;
    },
    default: (state) => {
      state;
    },
  },
});

export const { updateNote, saveNote, clearUpNote, updateTime } =
  formSlice.actions;

export default formSlice.reducer;
