import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { act } from "react"

export const fetchStudents = createAsyncThunk(
    'students/fetchStudents',
    async () => {
        const response = await axios.get('https://edu-nexus-be.vercel.app/students')
        return response.data        
    }
)

export const addStudentAsync = createAsyncThunk(
    'students/addStudent' ,
    async(newStudent) => {
        const response = await axios.post('https://edu-nexus-be.vercel.app/students', newStudent)
        return response.data
    }
)

export const getStudentById = createAsyncThunk(
    'students/getStudentById',
    async(studentId) => {
        const response = await axios.get(`https://edu-nexus-be.vercel.app/students/${studentId}`)
        return response.data
    }
)

export const updateStudentAsync = createAsyncThunk(
    'students/updateStudentData',
    async(studentData) => {
        const response = await axios.put(`https://edu-nexus-be.vercel.app/students/${studentData._id}`, studentData)
        return response.data
    }
)

export const deleteStudentAsync = createAsyncThunk(
    'students/deleteStudent',
    async(studentId) => {
        const response = await axios.delete(`http://localhost:3000/students/${studentId}`)
        return response.data
    }
)

export const studentSlice = createSlice(
    {
        name: 'students',
        initialState: {
            students: [],
            selectedStudent: null,
            status: 'idle',
            error: null
        },
        reducers: {
        },
        extraReducers: (builder) => {
            builder
                .addCase(fetchStudents.pending, (state) => {
                    state.status = 'loading'
                })
                .addCase(fetchStudents.fulfilled, (state, action) => {
                    state.students = action.payload,
                    state.status = 'success'
                })
                .addCase(fetchStudents.rejected, (state, action) => {
                    state.status = 'error',
                    state.error = action.error.message
                })
                .addCase(addStudentAsync.pending, (state) => {
                    state.status = 'loading'
                })
                .addCase(addStudentAsync.fulfilled, (state, action) => {
                    state.status = 'success',
                    state.students.push(action.payload)
                })
                .addCase(addStudentAsync.rejected, (state, action) => {
                    state.status = 'error',
                    state.error = action.error.message
                })
                .addCase(getStudentById.pending, (state) => {
                    state.status = 'loading'
                })
                .addCase(getStudentById.fulfilled, (state, action) => {
                    state.status = 'success',
                    state.selectedStudent = action.payload                    
                })
                .addCase(getStudentById.rejected, (state, action) => {
                    state.status = 'error',
                    state.error = action.error.message
                })
                .addCase(updateStudentAsync.pending, (state) => {
                    state.status = 'loading'
                })
                .addCase(updateStudentAsync.fulfilled, (state, action) => {
                    state.status = 'success',
                    state.selectedStudent = action.payload
                })
                .addCase(updateStudentAsync.rejected, (state, action) => {
                    state.status = 'error',
                    state.error = action.error.message
                })
                .addCase(deleteStudentAsync.pending, (state) => {
                    state.status = 'loading'
                })
                .addCase(deleteStudentAsync.fulfilled, (state, action) => {
                    state.status = 'success',
                    state.students.filter(student => student._id !== action.payload._id)
                })
                .addCase(deleteStudentAsync.rejected, (state, action) => {
                    state.status = 'error',
                    state.error = action.payload.error
                })
        }
    }
)

export default studentSlice.reducer

