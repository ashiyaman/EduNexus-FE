import { useState } from "react"
import Header from "../../components/Header"
import { useLocation, useNavigate } from "react-router-dom"
import { addTeacherAsync, updateTeacherAsync } from "./teacherSlice"
import { useDispatch } from "react-redux"

const TeacherForm = () => {
    const selectedTeacher = useLocation().state
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name, setName] = useState(selectedTeacher ? selectedTeacher.name : '')
    const [subject, setSubject] = useState(selectedTeacher ? selectedTeacher.subject : '')
    const [experience, setExperience] = useState(selectedTeacher ? selectedTeacher.experience : '')
    const [email, setEmail] = useState(selectedTeacher ? selectedTeacher.email : '')
    const [phone, setPhone] = useState(selectedTeacher ? selectedTeacher.phone : '')

    const handleSubmit = (e) => {
        e.preventDefault()
        const teacherData = {
            name: name,
            subject: subject,
            experience: experience,
            email: email,
            phone: phone
        }

        if(selectedTeacher){
            teacherData._id = selectedTeacher._id
            dispatch(updateTeacherAsync(teacherData))
        }
        else{
            dispatch(addTeacherAsync(teacherData))
        }
        setName('')
        setSubject('')
        setExperience('')
        setEmail('')
        setPhone('')
        navigate('/teachers')
    }

    return (
        <>
            <Header />
            <main className='container py-4'>
                <h3 className='my-3 text-success'>Add Teacher</h3>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='form-control' placeholder='Teacher Name'/><br/>
                    <input type='text' value={subject} onChange={(e) => setSubject(e.target.value)} className='form-control' placeholder='Subject'/><br/>
                    <input type='text' value={experience} onChange={(e) => setExperience(e.target.value)} className='form-control' placeholder='Experience'/><br/>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' placeholder='Email'/><br/>
                    <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} className='form-control' placeholder='Phone No.'/><br/>
                    
                    {selectedTeacher ?
                        <input type='submit' value='Update' className='mx-auto btn btn-success text-light btn-outline-warning fw-bold'/> :
                        <input type='submit' value='Add Teacher' className='mx-auto btn btn-success text-light btn-outline-warning fw-bold'/>
                    }
                </form>
            </main>
        </>)
}

export default TeacherForm