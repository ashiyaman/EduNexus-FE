import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import {fetchStudents, setFilter} from '../students/studentSlice'
import Header from "../../components/Header"


const Classes = () => {
    const dispatch = useDispatch()
    const {filteredStudents, status, error} = useSelector(state => state.students)

    useEffect(() => {
        dispatch(fetchStudents())
        dispatch(setFilter('All'))
    }, [])   
    
    const handleFilterChange = (e) => {
        dispatch(setFilter(e.target.value))
    }

    return (
        <>
            <Header/>
            <main className='container py-4'>
                <h2 className='text-dark my-3'>Class View</h2>
                <section>
                    <label>Filter By Gender:</label>
                    <select className='form-select my-2' onChange={(e) => handleFilterChange(e)}>
                        <option value='All'>All</option>
                        <option value='Boys'>Boys</option>
                        <option value='Girls'>Girls</option>
                    </select>
                    <label>Sort By:</label>
                    <select className='form-select my-2' onChange={(e) => dispatch(setFilter(e.target.value))}>
                        <option value='Name'>Name</option>
                        <option value='Marks'>Marks</option>
                        <option value='Attendance'>Attendance</option>
                    </select>
                </section>
                <section className='my-3'>                    
                    {filteredStudents && 
                        <ul>
                            {filteredStudents.map(student =>  
                                <li key={student._id} className='text-success-emphasis'>
                                    <Link to={`/students/${student._id}`} className='text-success-emphasis text-decoration-none'>
                                        {student.name} - {student.gender} - Marks: {student.marks} - Attendance: {student.attendance}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    }                    
                </section>
            </main>            
        </>
    )
}

export default Classes