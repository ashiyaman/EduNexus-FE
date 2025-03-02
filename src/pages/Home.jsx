import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{height: '100vh', backgroundColor: '#F8F9FA'}}>
        <ul className='list-unstyled d-flex flex-column' >
          <li className='bg-success my-2 rounded'>
            <Link to='/students' className='fw-bold text-light btn btn-lg btn-outline-warning' style={{minWidth: '50vw'}}>For Students</Link>
          </li>
          <li className='bg-success my-2 rounded'>
            <Link to='/classes' className='fw-bold text-light btn btn-lg btn-outline-warning' style={{minWidth: '50vw'}}>For Classes</Link>
          </li>
          <li className='bg-success my-2 rounded'>
            <Link to='/school' className='fw-bold text-light btn btn-lg btn-outline-warning' style={{minWidth: '50vw'}}>For School</Link>
          </li>
        </ul>
      </div>
    )
}

export default Home