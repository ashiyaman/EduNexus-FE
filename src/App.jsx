import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Students from './features/students/Students'
import Classes from './features/Classes/Classes'
import School from './features/School/School'
import StudentForm from './features/students/StudentForm'
import StudentDetail from './features/students/StudentDetail'
import Teachers from './features/teachers/Teachers'
import TeacherDetail from './features/teachers/TeacherDetail'
import TeacherForm from './features/teachers/TeacherForm'

function App() {
  return (
    <Router> 
      <div style={{backgroundColor: '#F8F9FA'}}>     
        <Routes>
          <Route 
            path='/'
            element={<Home />}/>
          <Route 
            path='/students'
            element={<Students />}/>
          <Route 
            path='/classes'
            element={<Classes />}/>
          <Route 
            path='/school'
            element={<School />}/>
          <Route 
            path='/students/studentForm'
            element={<StudentForm />}/>
          <Route 
            path='/students/:studentId'
            element={<StudentDetail />} />
          <Route 
            path='/teachers'
            element={<Teachers />} />
          <Route 
            path='/teachers/:teacherId'
            element={<TeacherDetail />} />
          <Route 
            path='/teachers/teacherForm'
            element={<TeacherForm />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
