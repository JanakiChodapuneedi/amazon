import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name : 'app',
    initialState : {
        isSideBarOpen : true ,
    },
    reducers: {
        toggleSidebar : (state)=>{
            state.isSideBarOpen = !state.isSideBarOpen;
        },
    },
})
export const {toggleSidebar} = appSlice.actions;
export default appSlice.reducer;