import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from './darkMode';
import userInfo from './user';
const store = configureStore({
    reducer:{
        darkModeSlice,
        userInfo,
    },
});
export default store;