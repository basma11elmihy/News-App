import React from 'react'
import { Link, NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className='container'>
  <Link className="navbar-brand" href="/">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to="">Home</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to="About">About</NavLink>
      </li>      
    </ul>
    
  </div>
  </div>
</nav>
    </div>
  )
}
