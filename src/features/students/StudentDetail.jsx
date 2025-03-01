import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStudents } from './studentSlice'

const StudentDetail = () => {
    const dispatch = useDispatch()
    const {students} = useSelector(state => state.students)
    const studentId = useParams()

    const [selectedStudent, setSelectedStudent] = useState('')

    useEffect(() => {
        dispatch(fetchStudents())
    }, [])

    if(students){
        const data = students.find(student => student._id === studentId.studentId)
        setSelectedStudent(data)
    }

    return (
        <>
            <Header />
            <main className='container py-4'>
                <h3>Student Detail</h3>
                {selectedStudent && 
                    <div>
                        <p>Name: {selectedStudent.name}</p>
                    </div>
                }
                
            </main>
            
        </>
    )
}

export default StudentDetail