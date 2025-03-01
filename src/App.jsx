import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Students from './features/students/Students'
import Classes from './features/Classes/Classes'
import School from './features/School/School'
import StudentForm from './features/students/StudentForm'

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
        </Routes>
      </div>
    </Router>
  )
}

export default App
