import { useState, useEffect } from "react"
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

function Pomodoro({ Tasks, setTasks }) {
  const [input, setInput] = useState("");
  const [actionText, setActionText] = useState("S T A R T");

  // Timer related states
  const [time, setTime] = useState([25, 0]);
  const [isRunning, setIsRunning] = useState(false);
  const [isSpotify, setIsSpotify] = useState("hidden");

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

  const handleSpotify = () => {
    if(isSpotify === "") {
      setIsSpotify("hidden");
    } else {
      setIsSpotify("");
    }
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

      <div className="flex flex-col justify-center items-center lg:h-[50vh] lg:w-[50vh] h-[60vw] w-[60vw] relative rounded-full backdrop-blur-sm bg-black backdrop-filter overflow-hidden bg-opacity-15 border-4 border-opacity-10 border-white animate-fade-up">

            <div className="lg:text-[16px] text-[13px] font-bold text-white drop-shadow-lg transition transform hover:scale-110 select-none animate-fade-up-2s">
                P O M O D O R O
            </div>
            
            <div className="lg:text-[72px] text-[50px] font-bold text-white drop-shadow-lg select-none animate-fade-up-2s">
              {time[0]} : {String(time[1]).padStart(2, '0')}
            </div>

            <div className="flex flex-row gap-5 animate-fade-up-2s">

                {/* Reset Button */}
                <div>
                  <FontAwesomeIcon icon={faRedo} className="text-white cursor-pointer transition transform hover:scale-125 hover:text-green-300" onClick={handleReset} />
                </div>

                {/* Action Text (START or PAUSE) */}
                <div className="text-[16px] font-bold text-white drop-shadow-lg hover:text-green-300 transition transform hover:scale-110 select-none" onClick={handleClick}>
                  {actionText}
                </div>

                {/* Spotify Menu */}
                <div>
                  <FontAwesomeIcon icon={faSpotify} className="text-white cursor-pointer transition transform hover:scale-125 hover:text-green-300" onClick={handleSpotify} />
                </div>

            </div>
      </div>  

      <div className="flex flex-col items-center justify-center z-50">

        {/* Tasks Submission Form */}
        <div>
          <form onSubmit={handleSubmit} className="flex flex-row items-center gap-7 pb-6">
            <input 
              type="text" 
              value={input} 
              onChange={handleInput} 
              className="mt-4 p-2 border-2 rounded-md bg-black bg-opacity-20 border-none placeholder-white text-white animate-fade-up-2s" 
              placeholder="Tasks" 
            />
            <button type="submit" className="mt-4 p-2 bg-teal-400 text-white rounded-md bg-opacity-40 animate-fade-up-2s">Add Task</button>
          </form>
        </div>

      {/* Spotify */}
        <div className={`absolute bottom-0 left-0 m-5 animate-fade-left ${isSpotify}`}>
          <iframe 
            style={{borderRadius: '12px'}}
            src="https://open.spotify.com/embed/playlist/5BMAJTcKjLCqitIgR1X0AT?utm_source=generator&theme=0" 
            width="100%" 
            height="152" 
            allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          >
          </iframe>
        </div>
      
        {/* Tasks */}
        <div>
          <ul className="lg:absolute lg:top-0 lg:right-0 m-4 flex flex-col justify-center items-center gap-3 z-55">
            {Tasks.map((task, index) => (
              <li 
                key={index} 
                className="z-50 lg:h-[7vh] lg:w-[25vw] w-[50vw] h-[5vw] select-none text-white flex flex-row justify-center items-center backdrop-filter backdrop-blur-sm bg-opacity-55 rounded-xl overflow-hidden bg-teal-400 transition transform hover:scale-105 hover:bg-cyan-300 hover:backdrop-blur-sm hover:bg-opacity-55 animate-fade-down"
                onClick={() => {
                  const newTasks = Tasks.filter((_, taskIndex) => taskIndex !== index);
                  setTasks(newTasks);
                }}
              >
                {task}
              </li>
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