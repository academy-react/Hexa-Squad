import { createSlice } from "@reduxjs/toolkit";

const userInfo = createSlice({
    name: "dark",
    initialState:{
        info:{},
    },
    reducers:{
        onUserChange : (state,action)=>{
            state.info = action.payload
        }
    },
})
export const { onUserChange } = userInfo.actions;
export default userInfo.reducer;