import { createSlice } from "@reduxjs/toolkit";
import whale from "../components/images/icons/whale.svg";
import cat from "../components/images/icons/cat.svg";
import rabbit from "../components/images/icons/rabbit.svg";

const animalList=[
    { id: 1, animal: "whale", path: `${whale}`, picked: false },
    { id: 2, animal: "cat", path: `${cat}`, picked: false },
    { id: 3, animal: "rabbit", path: `${rabbit}`, picked: false },
  ];

const initialState = animalList[0]
let newIndex;
export const stampSlice = createSlice({
  name: "user",
  initialState: { value: initialState },
  reducers: {
    next: (state) => {
      if (state.value.id <= animalList.length - 1) {
        newIndex = state.value.id;
      } else {
        newIndex = 0;
      }
      state.value=animalList[newIndex];
    },
    prev: (state) => {
      if (state.value.id <= 1) {
        newIndex = animalList.length - 1;
      } else {
        newIndex = state.value.id - 2;
      }
      state.value=animalList[newIndex];
    },
  },
});


export const { next, prev } = stampSlice.actions;

export default stampSlice.reducer;