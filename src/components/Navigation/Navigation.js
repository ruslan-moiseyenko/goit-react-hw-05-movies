import { NavLink, Outlet } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="App">
      <nav className="nav">
        <ul className="navList">
          <li className="navItem">
            <NavLink
              className={({ isActive }) =>
                isActive ? 'navLink--active' : 'navLink'
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              className={({ isActive }) =>
                isActive ? 'navLink--active' : 'navLink'
              }
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navigation;
