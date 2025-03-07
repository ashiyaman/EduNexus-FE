import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const schoolSlice = createSlice(
    {
        name: 'school',
        initialState: {
            totalStudents: 0,
            avgMarks: 0,
            avgAttendance: 0,
            topStudent: null,
            totalTeachers: 0,
            avgExperience: 0,
            mostExperiencedTeacher: null,
            subjectsTaught: []
        },
        reducers: {
            setTopStudent: (state, action) => {
                state.topStudent = action.payload
            },
            updateStudentStats : (state, action) => {
                state.totalStudents = action.payload.totalStudents
                state.avgMarks = action.payload.avgMarks
                state.avgAttendance = action.payload.avgAttendance
            },
            setExperiencedTeacher: (state, action) => {
                state.mostExperiencedTeacher = action.payload
            },
            updateTeacherStats: (state, action) => {
                state.totalTeachers = action.payload.totalTeachers
                state.avgExperience = action.payload.avgExperience
                state.subjectsTaught = action.payload.subjectsTaught
            }
        }
    }
)

export const {setTopStudent} = schoolSlice.actions

export const {updateStudentStats} = schoolSlice.actions

export const {setExperiencedTeacher} = schoolSlice.actions

export const {updateTeacherStats} = schoolSlice.actions