import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClock } from '@fortawesome/free-solid-svg-icons';

function Navbar({ currentPath }) {

  const [homeIconStyle, setHomeIconStyle] = useState("text-white");
  const [pomodoroIconStyle, setPomodoroIconStyle] = useState("text-white");

  function homeActiveIconStyle() {
    setHomeIconStyle("text-teal-300");
    setPomodoroIconStyle("text-white")
    console.log(currentPath);
  }


  function pomodoroActiveIconStyle() {
    setPomodoroIconStyle("text-teal-300");
    setHomeIconStyle("text-white");
    console.log(currentPath);
  }



  return (
    <>
    
      <nav className="flex flex-col justify-start items-start h-full fixed left-0 z-50">
        <ul className="flex flex-col items-center justify-center gap-1">
          <li className="mt-5 ml-5 scale-125 drop-shadow-lg transition transform hover:scale-150">
            <Link to="/" title="Home"><FontAwesomeIcon icon={faHome} className={`transition transform ${homeIconStyle}`} onClick={homeActiveIconStyle}/></Link>
          </li>
          <li className="mt-5 ml-5 scale-125 drop-shadow-lg transition transform hover:scale-150">
            <Link to="/pomodoro" title="Pomodoro" className={`transition transform ${pomodoroIconStyle}`} onClick={pomodoroActiveIconStyle}><FontAwesomeIcon icon={faClock} /></Link>
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