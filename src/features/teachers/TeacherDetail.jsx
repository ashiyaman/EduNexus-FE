import { useDispatch, useSelector } from "react-redux"
import { useParams, Link, useNavigate } from "react-router-dom"

import Header from "../../components/Header"
import { deleteStudentAsync } from "../students/studentSlice"
import { deleteTeacherAsync } from "./teacherSlice"

const TeacherDetail = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const teacherId = useParams()
    const {teachers, status, error} = useSelector(state => state.teachers)
    
    const selectedTeacher = teachers.find(teacher => teacher._id === teacherId.teacherId)

    const handleDelete = () => {
      dispatch(deleteTeacherAsync(selectedTeacher._id))
        .then(() => {
            navigate('/teachers')
        })      
    }

    return (
        <>
            <Header />
            <main className='container py-4' style={{minHeight: '100vh'}}>
                <h3 className='my-4 fw-bold'>Teacher Detail</h3>
                {status === 'loading' && <p>Loading...</p>}
                {error && <p>{error}</p>}

                {selectedTeacher && 
                    <div>
                        <p className='fw-medium'>Name: {selectedTeacher.name}</p>
                        <p className='fw-medium'>Subject: {selectedTeacher.subject}</p>
                        <p className='fw-medium'>Experience: {selectedTeacher.experience}</p>
                        <p className='fw-medium'>Email: {selectedTeacher.email}</p>
                        <p className='fw-medium'>Phone No: {selectedTeacher.phone}</p>
                        <button onClick={() => navigate('/teachers/teacherForm', {state: selectedTeacher})} 
                                className='btn btn-warning text-light btn-outline-success fw-semibold '>
                                    Edit Details
                        </button>
                        <Link onClick={() => handleDelete()} className='btn btn-danger btn-outline-success fw-semibold mx-3'>Delete</Link>
                    </div>
                }
            </main>
        </>
    )
}

export default TeacherDetail