import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
    meal: {}
}
const mealSlice = createSlice({
    name: "meal",
    initialState: initialstate,
    reducers: {
        setMealRed: (state, action) => {
            state.meal = action.payload
        }
    }
})
console.log(mealSlice);
export const { setMealRed } = mealSlice.actions
console.log(setMealRed);

export default mealSlice.reducer;