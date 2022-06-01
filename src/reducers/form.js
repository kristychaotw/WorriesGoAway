import { createSlice } from "@reduxjs/toolkit";

const formInitialState = {
  id: "",
  tag: "",
  keyword: "",
  stressRating: "",
  worry: "",
  animal: "",
  createDay: Date(),
  error: "",
  isStored: false,
};
export const formSlice = createSlice({
  name: "form",
  initialState: { value: formInitialState },
  reducers: {
    updateNote: (state, action) => {
    let item=Object.keys(action.payload)[0]
    let itemValue=Object.values(action.payload)[0]
    state.value[item]=itemValue
},
    saveNote: (state) => {
      state.value.isStored = true;
    },
    failtoSaveNote: (state) => {
      state.value.error = "failed to save the note";
    },
    default: (state) => {
      state;
    },
  },
});

export const { updateNote, saveNote, failtoSaveNote } = formSlice.actions;

export default formSlice.reducer;
