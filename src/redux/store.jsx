import { configureStore } from "@reduxjs/toolkit"
import mealReduser from "./MealSlice"

export const store = configureStore({
    reducer: {
        meal :mealReduser
    }
})

