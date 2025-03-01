import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchStudents = createAsyncThunk(
    'students/fetchStudents',
    async () => {
        const response = await axios.get('https://edu-nexus-be.vercel.app/students')
        return response.data        
    }
)

export const addStudent = createAsyncThunk('students/addStudent' ,
    async(studentData) => {
        const response = await axios.post('https://edu-nexus-be.vercel.app/students', studentData)
        return response.data
    }
)

export const studentSlice = createSlice(
    {
        name: 'students',
        initialState: {
            students: [],
            status: 'idle',
            error: null
        },
        reducers: {
            addStudent: (state, action) => {
                console.log(action.payload)
            }
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
        }
    }
)

export default studentSlice.reducer

