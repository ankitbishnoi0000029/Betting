import { configureStore } from "@reduxjs/toolkit";
import BoxReducer from "../Reducers/BoxReducer";

const store = configureStore({
  reducer: {
    Myreducer:BoxReducer
  }
});

export default store;