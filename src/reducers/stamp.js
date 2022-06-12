import { createSlice } from "@reduxjs/toolkit";
import whale from "../components/images/icons/whale.svg";
import cat from "../components/images/icons/cat.svg";
import rabbit from "../components/images/icons/rabbit.svg";
import polarbear from "../components/images/icons/polarbear.svg";
import brownbear from "../components/images/icons/brownbear.svg";

const animalList = [
  { id: 1, animal: "whale", path: `${whale}`, picked: false },
  { id: 2, animal: "cat", path: `${cat}`, picked: false },
  { id: 3, animal: "rabbit", path: `${rabbit}`, picked: false },
  { id: 4, animal: "polarbear", path: `${polarbear}`, picked: false },
  { id: 5, animal: "brownbear", path: `${brownbear}`, picked: false },
];

const initialState = animalList[0];
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
      state.value = animalList[newIndex];
    },
    prev: (state) => {
      if (state.value.id <= 1) {
        newIndex = animalList.length - 1;
      } else {
        newIndex = state.value.id - 2;
      }
      state.value = animalList[newIndex];
    },
    pick: (state) => {
      state.value.picked = true;
    },
  },
});

export const { next, prev, pick } = stampSlice.actions;

export default stampSlice.reducer;
