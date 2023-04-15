import { Link } from 'react-router-dom'

function Sidebar () {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/match-up'>Match Up</Link>
        </li>
        <li>
          <Link to='/champion-pool'>Champion Pool</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
