import { createSlice } from '@reduxjs/toolkit'


const UserSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
            console.log(action.payload);
        },
        removeUser(state, action) {
            state.splice(action.payload, 1)
            // console.log(action.payload);

        },
        clearAllUsers(state, action) {
            // state.remove(action.payload)

            return [];
        },
    }

})

console.log("users", UserSlice.actions);

export default UserSlice.reducer
export const { addUser, removeUser, clearAllUsers } = UserSlice.actions