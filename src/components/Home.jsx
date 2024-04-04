import { useState, useEffect } from "react"
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Home({ Tasks, setTasks }) {
  const [input, setInput] = useState("");
  const [actionText, setActionText] = useState("S T A R T");

  // Timer related states
  const [time, setTime] = useState([25, 0]);
  const [isRunning, setIsRunning] = useState(false);

  const handleClick = () => {
    if (actionText === "S T A R T") {
      setActionText("P A U S E");
      setIsRunning(true);
    } else {
      setActionText("S T A R T");
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setTime([25, 0]);
    setIsRunning(false);
    setActionText("S T A R T");
  }

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks([...Tasks, input]);
    setInput("");
  };

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const newTime = [...prevTime];
          if (newTime[1] === 0 && newTime[0] !== 0) {
            newTime[0] -= 1;
            newTime[1] = 59;
          } else {
            newTime[1] -= 1;
          }

          if (newTime[0] === 0 && newTime[1] === 0) {
            setIsRunning(false);
            alert("Pomodoro finished");
          }

          return newTime;
        });
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen z-50">
      <div className="text-white text-[100px] font-bold z-50 select-none drop-shadow-lg">
          MM:SS
      </div>
      <div className="text-white text-[35px] z-50 select-none">
          Hello JC
      </div>
    </div>
  )
}

Home.propTypes = {
  Tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default Home