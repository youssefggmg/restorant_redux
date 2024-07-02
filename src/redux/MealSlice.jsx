import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
    meal: {}
}
const mealSlice = createSlice({
    name: "meal",
    initialState: initialstate,
    reducers: {
        setMeal: (state) => {
            state = {}
        }
    }
})
console.log(mealSlice);
export const { setMeal } = mealSlice.actions

export default mealSlice.reducer;