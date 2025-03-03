import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const schoolSlice = createSlice(
    {
        name: 'school',
        initialState: {
            totalStudents: 0,
            avgMarks: 0,
            avgAttendance: 0,
            topStudent: null
        },
        reducers: {
            setTopStudent: (state, action) => {
                state.topStudent = action.payload
            },
            updateSchoolStats : (state, action) => {
                state.totalStudents = action.payload.totalStudents
                state.avgMarks = action.payload.avgMarks
                state.avgAttendance = action.payload.avgAttendance
            }
        }
    }
)

export const {setTopStudent} = schoolSlice.actions

export const {updateSchoolStats} = schoolSlice.actions