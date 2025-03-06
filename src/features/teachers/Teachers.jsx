import { Link } from "react-router-dom"
import { useEffect } from "react"

import Header from "../../components/Header"
import { fetchTeachers } from "./teacherSlice"
import { useDispatch, useSelector } from "react-redux"
import TeacherList from "./TeacherList"

  /*School View

Student Statistics
-------------------
Total Students: 100
Average Attendance: 92.50
Average Marks: 85.60
Top Student: Alice Johnson

Teacher Statistics
-------------------
Total Teachers: 5
Average Experience: 10.4 years
Most Experienced Teacher: David Wilson (15 years)
Subjects Taught: Mathematics, Science, English, History, Computer Science*/

const Teachers = () => {
    const dispatch = useDispatch()
    const {teachers, status, error} = useSelector(state => state.teachers)

    useEffect(() => {
        dispatch(fetchTeachers())
    }, [])

    return (
        <>
            <Header />
            <main className='container py-4'>
                <h2 className='text-dark mb-3'>Teachers List</h2>
                {status === 'loading' && <p>Loading...</p>}
                {error && <p>{error}</p>}
                <Link to='/teachers/teacherForm' className='btn btn-outline-success mb-4 fw-bold btn-warning'>Add Teacher</Link>
                {teachers && (status === 'success') && <TeacherList teachers={teachers}/>}
            </main>
        </>
    )
}

export default Teachers