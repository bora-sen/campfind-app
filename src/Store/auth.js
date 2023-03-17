import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    isAuth:false,
    user:false
}
export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login: (state,action) => {
            state.isAuth = true,
            state.user = action.payload
        },
        logout: (state) => {
            state.isAuth = false,
            state.user = false
        }
    }

});

export const {login,logout} = authSlice.actions;
export default authSlice.reducer;