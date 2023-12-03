import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data/data";

const userSlice = createSlice({
    name:'users',
    initialState:userList,
    reducers:{
        //To define actions
        addUser:(state,action)=>{
            state.push(action.payload)
        },
        updateUser:(state,action)=>{
            const {id,name,phone,email} = action.payload;
            const updateuser = state.find(user=>user.id==id);
            if (updateuser) {
                updateuser.id = id;
                updateuser.name = name;
                updateuser.email = email;
                updateuser.phone = phone;
            }
        },
        deleteUser:(state,action)=>{
            const {id} = action.payload;
            const deleteuser = state.find(user=>user.id==id);
            if (deleteuser) {
                return state.filter(item => item.id !== id);
            }
        }
    }
});

export const {addUser, updateUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;