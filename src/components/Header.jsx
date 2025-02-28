import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='navbar navbar-expand-lg' style={{backgroundColor: '#2D6A4F'}}>
            <div className='container'>
            <a className='navbar-brand'>
                Student Management
            </a>
            <nav>
                <ul>
                    <li>
                        <Link />
                    </li>
                </ul>
            </nav>
            </div>
        </div>
    )
}

export default Header