import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Students from './features/students/Students'
import Classes from './features/Classes/Classes'
import School from './features/School/School'

function App() {
  return (
    <Router> 
      <div className='container' style={{backgroundColor: '#F8F9FA'}}>     
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
        </Routes>
      </div>
    </Router>
  )
}

export default App
