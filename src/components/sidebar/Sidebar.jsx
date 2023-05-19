import { Link } from 'react-router-dom'

function Sidebar () {
  return (
    <div className='sidebar'>
      <nav className='sidebar__inner'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/compositions'>Compositions</Link>
          </li>
          <li>
            <Link to='/match-up'>Match Up</Link>
          </li>
          <li>
            <Link to='/champion-pool'>Champion Pool</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
