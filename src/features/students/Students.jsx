import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import { fetchStudents } from './studentSlice'

const Students = () => {
    const dispatch = useDispatch()
    const {students, status, error} = useSelector(state => state.students)

    useEffect(() => {
        dispatch(fetchStudents())
    }, [])

    return (
        <>
            <Header />
            <main className='container py-4'>
                <Link className='btn text-dark my-2' style={{backgroundColor: '#E9B949'}}>Add Students</Link>
                <h2 className='text-dark'>Students List</h2>
                {status === 'loading' && <p>Loading...</p>}
                {error && <p>{error}</p>}
                <ul>
                    {students && 
                        students.map(student => 
                            <li key={student._id} className='text-success-emphasis'>
                                <Link className='text-success-emphasis'>{student.name} (Age: {student.age})</Link>
                            </li>)
                    }
                </ul>
            </main>            
        </>
    )
}

export default Students