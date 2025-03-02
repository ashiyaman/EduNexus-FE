import { Link,      useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../../components/Header'
import { getStudentById } from './studentSlice'

const StudentDetail = () => {
    const {studentId} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {selectedStudent, status, error} = useSelector(state => state.students)    

    useEffect(() => {
        dispatch(getStudentById(studentId))
    }, [studentId])

    return (
        <>
            <Header />
            <main className='container py-4' style={{minHeight: '100vh'}}>
                <h3 className='my-4'>Student Detail</h3>
                {status === 'loading' && <p>Loading...</p>}
                {error && <p>{error}</p>}

               {selectedStudent && 
                    <div>
                        <p className='fw-medium'>Name: {selectedStudent.name}</p>
                        <p className='fw-medium'>Age: {selectedStudent.age}</p>
                        <p className='fw-medium'>Grade: {selectedStudent.grade}</p>
                        <p className='fw-medium'>Attendance: {selectedStudent.attendance}</p>
                        <p className='fw-medium'>Marks: {selectedStudent.marks}</p>
                        <button onClick={() => navigate('/students/studentForm', {state: selectedStudent})} 
                                className='btn btn-warning text-light btn-outline-success fw-semibold '>
                                    Edit Details
                        </button>
                        <Link className='btn btn-danger btn-outline-success fw-semibold mx-3'>Delete</Link>
                    </div>
                }                
            </main>
            
        </>
    )
}

export default StudentDetail