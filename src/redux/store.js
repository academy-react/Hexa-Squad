import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from './darkMode'
const store = configureStore({
    reducer:{
        darkModeSlice
    },
});
export default store;