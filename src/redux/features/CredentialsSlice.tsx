import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EachUser } from "./../../typescript/GlobalTypes";

interface InitialStateType {
    users: EachUser[];
}


const localStorageData = JSON.parse(localStorage.getItem("users-credentials") ?? "null")

const initialState: InitialStateType = {
    users: localStorageData !== null ? localStorageData : [],
};

const credentialsSlice = createSlice({
    name: "credentials slice",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<EachUser>) => {
            const newUsersArray = [...state.users, action.payload];
            console.log(newUsersArray)
            state.users = newUsersArray;
            if (localStorage) {
                localStorage.setItem("users-credentials", JSON.stringify(newUsersArray));
            }

        },
    },
});
export const { addUser } = credentialsSlice.actions;
export default credentialsSlice.reducer;
