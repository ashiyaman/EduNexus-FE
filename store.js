import { configureStore } from "@reduxjs/toolkit";
import { studentSlice } from "./src/features/students/studentSlice";

export default configureStore({
    reducer: {
        students: studentSlice.reducer
    }
})

