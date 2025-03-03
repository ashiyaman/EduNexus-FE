import { useDispatch, useSelector } from "react-redux"
import Header from "../../components/Header"
import { useEffect } from "react"
import { fetchStudents } from "../students/studentSlice"
import { updateSchoolStats, setTopStudent } from "./schoolSlice"

const School = () => {
    const dispatch = useDispatch()
    const {students} = useSelector(state => state.students)
    const {totalStudents, avgMarks, avgAttendance, topStudent} = useSelector(state => state.school)

    useEffect(() => {
        dispatch(fetchStudents())
    }, [])

    useEffect(() => {
        if(students){
            const noOfStudents = students.length || 0
            const attendanceAverage = students.length 
                ? students.reduce((acc, curr) => curr.attendance + acc, 0) / students.length 
                : 0;
            const marksAverage = students.length 
                ? students.reduce((acc, curr) => curr.marks + acc, 0) / students.length 
                : 0;
            const topMarkStudent = students.length > 0 ? [...students].sort((a, b) => b.marks - a.marks) : null
        
            const schoolStats = {
                totalStudents: noOfStudents,
                avgAttendance: attendanceAverage,
                avgMarks: marksAverage,
            }

            dispatch(updateSchoolStats(schoolStats))
            dispatch(setTopStudent(topMarkStudent[0]))
        }
    }, [students])

    return (
        <>
            <Header/>
            <main className='container py-4' style={{minHeight: '100vh'}}>
                <h2 className='text-dark my-3'>School View</h2>
                <section className="my-2">
                    <p className="fw-semibold text-success">Total Students: {totalStudents? totalStudents : 0}</p>
                    <p className="fw-semibold text-success">Average Attendance: {avgAttendance ? avgAttendance.toFixed(2) : 0}</p>
                    <p className="fw-semibold text-success">Average Marks: {avgMarks ? avgMarks.toFixed(2) : 0}</p>
                    <p className="fw-semibold text-success">Top Student: {topStudent ? topStudent.name : '-' }</p>
                </section>
            </main>
        </>
    )
}

export default School