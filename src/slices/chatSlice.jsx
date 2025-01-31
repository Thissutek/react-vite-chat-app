import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    room: "",
    messages: []
};


export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setRoom: (state, action) => {
            state.room = action.payload
        },
        addMessage: (state, action) => {
            state.messages.push(action.payload)
        },
    },
})

export const { setRoom, addMessage } = chatSlice.actions

export default chatSlice.reducer