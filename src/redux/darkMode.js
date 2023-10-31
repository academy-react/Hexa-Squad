import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
    name: "dark",
    initialState:{
        theme:true,
    },
    reducers:{
        onThemeChange : (state,action)=>{
            state.theme = action.payload
        }
    },
})
export const { onThemeChange } = darkModeSlice.actions;
export default darkModeSlice.reducer;