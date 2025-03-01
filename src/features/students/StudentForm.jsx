import { useState } from "react"
import { useDispatch } from "react-redux"

import Header from "../../components/Header"
import { addStudent } from "./studentSlice"

const StudentForm = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [grade, setGrade] = useState('')
    const [gender, setGender] = useState('')

    const addStudentHandler = (e) => {
        e.preventDefault()
        if(!name || !age || !grade || !gender){
            alert('Please enter all the details')
            return
        }
        const studentData = {
            name: name,
            age: parseInt(age),
            grade: grade,
            gender: gender
        }

        if(studentData){
            dispatch(addStudent(studentData))
            setName('')
            setAge('')
            setGrade('')
            setGender('')
        }
    }

    return (
        <>
            <Header />
            <main className="container py-4">
                <h3 className="my-3">Add Student</h3>
                <form onSubmit={addStudentHandler}>
                    <input type='text' placeholder='Name' className='form-control' onChange={(e) => setName(e.target.value)} value={name} /><br/>
                    <input type='number' placeholder='Age' className='form-control' onChange={(e) => setAge(e.target.value)} value={age} /><br/>
                    <input type='text' placeholder='Grade' className='form-control' onChange={(e) => setGrade(e.target.value)} value={grade} /><br/>
                    <label>Gender: </label>
                    <div className='form-check'>                        
                        <input type='radio' className='form-check-input' onChange={(e) => setGender(e.target.value)} name='gender' value='Male' />Male                         
                    </div>
                    <div className='form-check'> 
                        <input type='radio' className='form-check-input' onChange={(e) => setGender(e.target.value)} name='gender' value='Female' />Female
                    </div><br/>
                    <input type='submit' value='Add' className='btn btn-success fw-bold'/>
                </form>
            </main>
        </>
    )
}

export default StudentForm