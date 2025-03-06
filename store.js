import { configureStore } from "@reduxjs/toolkit";
import { studentSlice } from "./src/features/students/studentSlice";
import { schoolSlice } from "./src/features/School/schoolSlice";
import { teacherSlice } from "./src/features/teachers/teacherSlice";

export default configureStore({
    reducer: {
        students: studentSlice.reducer,
        school: schoolSlice.reducer,
        teachers: teacherSlice.reducer
    }
})

