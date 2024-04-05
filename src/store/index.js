import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlicer";

const Store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default Store;
