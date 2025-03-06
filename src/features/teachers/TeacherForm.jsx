import Header from "../../components/Header"

const TeacherForm = () => {

    const handleSubmit = (e) => {

    }
    return (
        <>
            <Header />
            <main className='container py-4'>
                <h3 className='my-3'>Add Teacher</h3>
                <form onSubmit={handleSubmit}>
                </form>
            </main>
        </>)
}

export default TeacherForm