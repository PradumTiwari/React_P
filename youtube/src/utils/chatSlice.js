import { createSlice } from "@reduxjs/toolkit";


const chatSlice=createSlice({
    name:'chat',
    initialState:{
       item:[]
    },

    reducers:{
       addMessage:(state,action)=>{
        state.item.unshift(action.payload)
        
       }
    }
})

export const {addMessage}=chatSlice.actions;
export default chatSlice.reducer;
