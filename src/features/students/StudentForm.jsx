import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../../components/Header'
import { addStudentAsync, updateStudentAsync } from './studentSlice'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const StudentForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const student = useLocation().state

    const [name, setName] = useState(student ? student.name : '')
    const [age, setAge] = useState(student ? student.age : '')
    const [grade, setGrade] = useState(student ? student.grade : '')
    const [gender, setGender] = useState(student ? student.gender : '')
    const [attendance, setAttendance] = useState((student && student.attendance) ? student.attendance : '')
    const [marks, setMarks] = useState((student && student.marks) ? student.marks : '')

    const handleSubmit = (e) => {
        e.preventDefault()

        const newStudent = {
            name: name,
            age: parseInt(age),
            grade: grade,
            gender: gender,
            attendance: attendance,
            marks: marks
        }

        if(student){
            newStudent._id = student._id
            dispatch(updateStudentAsync(newStudent))
        }
        else{
            if(!name || !age || !grade || !gender){
                alert('Please enter all the details')
                return
            }      
    
            if(newStudent){
                dispatch(addStudentAsync(newStudent))
                    .then(() => {
                        setName('')
                        setAge('')
                        setGrade('')
                        setGender('')
                    })                
            }
        }  
        navigate('/students')      
    }

    return (
        <>
            <Header />
            <main className='container py-4'>
                <h3 className='my-3 text-success'>Add Student</h3>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Name' className='form-control' onChange={(e) => setName(e.target.value)} value={name} /><br/>
                    <input type='number' placeholder='Age' className='form-control' onChange={(e) => setAge(e.target.value)} value={age} /><br/>
                    <input type='text' placeholder='Grade' className='form-control' onChange={(e) => setGrade(e.target.value)} value={grade} /><br/>
                    <label>Gender: </label>
                    <div className='form-check'>                        
                        <input type='radio' className='form-check-input' 
                            onChange={(e) => setGender(e.target.value)} name='gender' value='Male' checked={gender == 'Male' ? 'Male' : ''} />Male                         
                    </div>
                    <div className='form-check'> 
                        <input type='radio' className='form-check-input'
                            onChange={(e) => setGender(e.target.value)} name='gender' value='Female' checked={gender == 'Female' ? 'Female' : ''}/>Female
                    </div><br/>
                    {student && 
                        <>
                            <input type='number' placeholder='Attendance' className='form-control' onChange={(e) => setAttendance(e.target.value)} value={attendance} /><br/>
                            <input type='number' placeholder='Marks' className='form-control' onChange={(e) => setMarks(e.target.value)} value={marks} /><br/>
                            <input type='submit' value='Update' className='mx-auto btn btn-success text-light btn-outline-warning fw-bold'/>
                        </>
                    }
                    {!student && 
                        <input type='submit' value='Add' className='mx-auto btn btn-success text-light btn-outline-warning fw-bold'/>
                    }                

                </form>
            </main>
        </>
    )
}

export default StudentForm