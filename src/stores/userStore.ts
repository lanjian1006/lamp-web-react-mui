import { createSlice, configureStore } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userStore',
    initialState: {
        user: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const {setUser} = userSlice.actions

export const store = configureStore({
    reducer: userSlice.reducer
})
