import { Link } from "react-router-dom"

import Header from "../../components/Header"

const Teachers = () => {
    return (
        <>
            <Header />
            <main className='container py-4'>
                <Link to='/teachers/teacherForm' className='btn btn-outline-success mb-4 fw-bold btn-warning'>Add Teacher</Link>
                <h2 className='text-dark'>Teachers List</h2>
            </main>
        </>
    )
}

export default Teachers