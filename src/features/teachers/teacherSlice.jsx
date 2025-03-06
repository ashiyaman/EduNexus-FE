import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTeachers = createAsyncThunk(
    'teachers/fetchTeachers',
    async() => {
        const response = await axios.get(`https://edu-nexus-be.vercel.app/teachers`)
        if(response){
            return response.data
        }
    }
)

export const deleteTeacherAsync = createAsyncThunk(
    'teachers/delete',
    async(teacherId) => {
        console.log(teacherId)
        const response = await axios.delete(`https://edu-nexus-be.vercel.app/teachers/${teacherId}`)
        console.log(response)
        if(response){
            return response.data
        }
    }
)

export const teacherSlice = createSlice({
    name: 'teachers',
    initialState: {
        teachers: [],
        status: 'idle',
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTeachers.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchTeachers.fulfilled, (state, action) => {
                state.status = 'success',
                state.teachers = action.payload
            })
            .addCase(fetchTeachers.rejected, (state, action) => {
                state.status = 'error',
                state.error = action.payload
            })
            .addCase(deleteTeacherAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(deleteTeacherAsync.fulfilled, (state, action) => {
                state.status = 'success',
                state.teachers = state.teachers.filter(teacher => teacher._id !== action.payload._id)
            })
            .addCase(deleteTeacherAsync.rejected, (state, action) => {
                state.status = 'error',
                state.error = action.payload
            })
    }
})

export default teacherSlice.reducer