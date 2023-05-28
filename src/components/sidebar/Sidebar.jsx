import { Link } from 'react-router-dom'

function Sidebar () {
  return (
    <div className='sidebar'>
      <div className='sidebar__inner'>
        <Link to='/'>
          <img src='/public/assets/img/logo.svg' alt='logo de la faille' />
        </Link>
        <nav className='sidebar__nav'>
          <ul className='sidebar__list'>
            <li className='sidebar__item'>
              <Link to='/compositions' className='sidebar__link'>
                <figure className='sidebar__link-figure'>
                  <img
                    src='public/assets/img/icons/nav/team.svg'
                    alt='navigation vers compositons'
                  />
                </figure>
                <span className='sidebar__link-label'>Compositions</span>
              </Link>
            </li>
            <li className='sidebar__item'>
              <Link to='/match-up' className='sidebar__link'>
                <figure className='sidebar__link-figure'>
                  <img
                    src='public/assets/img/icons/nav/match_up.svg'
                    alt='navigation vers match up'
                  />
                </figure>
                <span className='sidebar__link-label'>Match Up</span>
              </Link>
            </li>
            <li className='sidebar__item'>
              <Link to='/champion-pool' className='sidebar__link'>
                <figure className='sidebar__link-figure'>
                  <img
                    src='public/assets/img/icons/nav/champion_pool.svg'
                    alt='navigation vers champion pool'
                  />
                </figure>
                <span className='sidebar__link-label'>Champion Pool</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
