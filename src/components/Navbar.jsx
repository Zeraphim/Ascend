import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Navbar({ currentPath }) {
  return (
    <>
    
      <nav className="flex flex-col justify-start items-start h-full fixed left-0 z-50">
        <ul className="flex flex-col items-center justify-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pomodoro">Pomodoro</Link>
          </li>
          {/* <li>
            <Link to="/about">About</Link>
          </li> */}
          {/* <li>
            <Link to="/haha"><b className="font-semibold bg-red-800">{currentPath}</b></Link>
          </li> */}
        </ul>
      </nav>

    </>
  )
}

Navbar.propTypes = {
  currentPath: PropTypes.string.isRequired,
};

export default Navbar;