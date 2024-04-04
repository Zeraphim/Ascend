import { useState, useEffect } from "react"
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Pomodoro({ Tasks, setTasks }) {
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
    <div className="flex flex-col justify-center items-center min-h-screen bg-yellow-300">

      <div className="flex flex-col justify-center items-center h-[50vh] w-[30vw] bg-red-300 relative">
            

            <div className="text-[72px] font-bold text-white drop-shadow-lg select-none">
              {time[0]} : {String(time[1]).padStart(2, '0')}
            </div>

            <div className="flex flex-row gap-5">

                {/* Reset Button */}
                <div>
                  <FontAwesomeIcon icon={faRedo} className="text-white cursor-pointer transition transform hover:scale-125" onClick={handleReset} />
                </div>

                {/* Action Text (START or PAUSE) */}
                <div className="text-[16px] font-bold text-white drop-shadow-lg hover:text-green-300 transition transform hover:scale-110 select-none" onClick={handleClick}>
                  {actionText}
                </div>

                {/* Hamburger Menu */}
                <div>
                  <FontAwesomeIcon icon={faBars} className="text-white cursor-pointer transition transform hover:scale-125" onClick={handleReset} />
                </div>

            </div>
      </div>  

      <div className="flex flex-col items-center justify-center">

        {/* Tasks Submission Form */}
        <div>
          <form onSubmit={handleSubmit} className="flex flex-row items-center gap-7 pb-6">
            <input 
              type="text" 
              value={input} 
              onChange={handleInput} 
              className="mt-4 p-2 border-2 border-gray-300 rounded-md" 
              placeholder="Add task" 
            />
            <button type="submit" className="mt-4 p-2 bg-teal-400 text-white rounded-md">Add Task</button>
          </form>
        </div>

        {/* Tasks */}
        <div>
          <ul className="flex flex-col justify-center items-center gap-3">
            {Tasks.map((task, index) => (
              <li key={index} className="h-[7vh] w-[30vw] flex flex-row justify-center items-center bg-red-300">{task}</li>
            ))}
          </ul>
        </div>


      </div>
    </div>
  )
}

Pomodoro.propTypes = {
  Tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default Pomodoro