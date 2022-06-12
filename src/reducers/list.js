import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";

export const getNotes=createAsyncThunk(
    "notes/getNotes",
)
const initialState = { notes: [], loading: true };

export const listSlice = createSlice({
  name: "list",
  initialState: { value: initialState },
  reducers: {
    makeRequest: (state) => {
      state = { ...state, loading: true, notes: [] };
    },
    getList: (state, action) => {
      console.log("state-before:", current(state));
      console.log("actionpayload:",action.payload);
      state = { ...state, loading: false, notes: [...state.notes, action.payload ]};
      console.log("state-after:", state);

    },
    error: (state) => {
      state = {
        ...state,
        loading: false,
        error: actions.payload.error,
        notes: [],
      };
    },
  },
  extraReducers:{
      [getNotes.pending]:(state,action)=>{
          state.status="loading"
      },
      [getNotes.fulfilled]:(state,action)=>{
          state.status="success";
          state.notes=action.payload
      },
      [getNotes.rejected]:(state,action)=>{
          state.status="failed"
      }
  }
});

export const { makeRequest, getList, error } = listSlice.actions;

export default listSlice.reducer;
