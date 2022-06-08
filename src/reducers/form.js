import { createSlice } from "@reduxjs/toolkit";
import moment from 'moment';

const formInitialState = {
  id:  "",
  tag: "",
  title: "",
  rating: "",
  worry: "",
  animal: "",
  createDate: moment().format(),
  error: "",
  isComplete: false,
  endDate:"",
  author:"",
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
