import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/Header'
import { useEffect } from 'react'
import { fetchStudents } from '../students/studentSlice'
import { fetchTeachers } from '../teachers/teacherSlice'
import { updateStudentStats, updateTeacherStats, setExperiencedTeacher, setTopStudent } from './schoolSlice'

const School = () => {
    const dispatch = useDispatch()

    const {students} = useSelector(state => state.students)
    const {teachers} = useSelector(state => state.teachers)
    const {totalStudents, totalTeachers, avgMarks, avgAttendance, topStudent, avgExperience, mostExperiencedTeacher, subjectsTaught} = useSelector(state => state.school)

    useEffect(() => {
        dispatch(fetchStudents())
        dispatch(fetchTeachers())
    }, [])

    useEffect(() => {
        if(students.length > 0){
            const noOfStudents = students.length || 0
            const attendanceAverage = students.length 
                ? students.reduce((acc, curr) => curr.attendance + acc, 0) / students.length 
                : 0;
            const marksAverage = students.length 
                ? students.reduce((acc, curr) => curr.marks + acc, 0) / students.length 
                : 0;
            const topMarkStudent = students.length > 0 ? [...students].sort((a, b) => b.marks - a.marks) : []
        
            const studentStats = {
                totalStudents: noOfStudents,
                avgAttendance: attendanceAverage,
                avgMarks: marksAverage,
            }

            dispatch(updateStudentStats(studentStats))
            dispatch(setTopStudent(topMarkStudent[0]))
        }

        if(teachers.length > 0){
            const noOfTeachers = teachers.length || 0
            const experienceAverage = teachers.length > 0 ?
                                        teachers.reduce((acc, curr) => curr.experience + acc, 0) / teachers.length : 0
            const subjects = teachers.length > 0 ?
                                    [...new Set(teachers.flatMap(teacher => teacher.subjects))] : []
            const experiencedTeacher = teachers.length > 0 ?
                [...teachers].sort((a, b) => b.experience - a.experience) : []

            const teacherStats = {
                totalTeachers: noOfTeachers,
                avgExperience: experienceAverage,
                subjectsTaught: subjects.join(', ')
            }


            dispatch(updateTeacherStats(teacherStats))
            dispatch(setExperiencedTeacher(experiencedTeacher[0]))
        }
    }, [students, teachers])

    return (
        <>
            <Header/>
            <main className='container py-4' style={{minHeight: '100vh'}}>
                <h2 className='text-dark my-3'>School View</h2>
                {totalStudents > 0 && 
                    <section className='my-4 card container'>
                        <div className='card-body'>
                            <h3 className='card-title '>Students:</h3>
                            <p className=' card-text fw-semibold text-success'>Total Students: {totalStudents? totalStudents : 0}</p>
                            <p className=' card-text fw-semibold text-success'>Average Attendance: {avgAttendance ? avgAttendance.toFixed(2) : 0}</p>
                            <p className=' card-text fw-semibold text-success'>Average Marks: {avgMarks ? avgMarks.toFixed(2) : 0}</p>
                            <p className=' card-text fw-semibold text-success'>Top Student: {topStudent ? topStudent.name : '-' }</p>
                        </div>
                    </section>
                }
                {totalTeachers > 0 && 
                    <section className='my-4 card container'>
                        <div className='card-body'>
                            <h3 className='card-title '>Teachers:</h3>
                            <p className=' card-text fw-semibold text-success'>Total Teachers: {totalTeachers? totalTeachers : 0}</p>
                            <p className=' card-text fw-semibold text-success'>Average Experience: {avgExperience ? avgExperience.toFixed(2) : 0} years</p>
                            <p className=' card-text fw-semibold text-success'>Subjects Taught: {subjectsTaught.length > 0 ? subjectsTaught : '-'}</p>
                            <p className=' card-text fw-semibold text-success'>Most Experienced Teacher: {mostExperiencedTeacher ? mostExperiencedTeacher.name : '-' }</p>
                        </div>
                    </section>
                }                
            </main>
        </>
    )
}

export default School