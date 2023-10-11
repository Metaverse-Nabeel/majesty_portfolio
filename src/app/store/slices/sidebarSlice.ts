import { createSlice } from "@reduxjs/toolkit";

interface sidebarItems {
  type: string,
  item: string,
}

const initialState: sidebarItems = {
  type: "active",
  item: "portfolio",
};

const sidebarSlice = createSlice({
  name: "activeItem",
  initialState,
  reducers: {
    changeActiveItem: (state, action) => {
      state.type = action.payload.type;
      state.item = action.payload.item;
    },
  },
});

export const { changeActiveItem } = sidebarSlice.actions;
export default sidebarSlice.reducer;
