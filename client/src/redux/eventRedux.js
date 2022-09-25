import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
  name: "Events",
  initialState: { Events: [] },
  reducers: {
    getEvents: (state, action) => {
      state.Events = [...action.payload];
    },
    postEvents: (state, action) => {
      state = [...state, action.payload];
    },
  },
});

export const { getEvents, postEvents } = eventSlice.actions;

export default eventSlice.reducer;
