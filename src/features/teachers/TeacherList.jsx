import { Link } from "react-router-dom"

const TeacherList = ({teachers}) => {
    return(
        <ul>
            {teachers.map((teacher) => 
                <li key={teacher._id} className='text-success-emphasis'>
                    <Link to={`/teachers/${teacher._id}`} className='text-success-emphasis text-decoration-none'>
                        {teacher.name} - Subject: {teacher.subject} - Experience: {teacher.experience} years
                    </Link>
                </li>
            )}
        </ul>
    )
}

export default TeacherList