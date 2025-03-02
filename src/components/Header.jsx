import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='navbar navbar-expand-lg' style={{backgroundColor: '#2D6A4F'}}>
            <div className='container'>
                <a className='navbar-brand text-light'>
                    Student Management
                </a>
                <button className='navbar-toggler bg-light btn-outline-success' data-bs-toggle='collapse' data-bs-target='#collapsibleElement'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div id='collapsibleElement' className='navbar collapse navbar-collapse'>                
                    <ul className='navbar-nav '>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link text-light'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/students' className='nav-link text-light'>Students</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/classes' className='nav-link text-light'>Classes</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/school' className='nav-link text-light'>School</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header