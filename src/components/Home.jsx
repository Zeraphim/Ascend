import { useState, useEffect } from "react"
import PropTypes from 'prop-types';

import zodiacMessages from '../data/zodiacMessages.json';

// TODO
// AOS
// https://www.npmjs.com/package/aos

function Home({ Tasks, setTasks, Name, setName, Birthdate, setBirthdate, isModal, setIsModal, time, setTime, greetings, setGreetings, signText, setSignText}) {

  const [modalGreetings, setModalGreetings] = useState("Greetings !!!");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const getZodiacSign = (day, month) => {
    if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
      return "Capricorn ♑️";
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
      return "Aquarius ♒️";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
      return "Pisces ♓️";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
      return "Aries ♈️";
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
      return "Taurus ♉️";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
      return "Gemini ♊️";
    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
      return "Cancer ♋️";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
      return "Leo ♌️";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
      return "Virgo ♍️";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
      return "Libra ♎️";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
      return "Scorpio ♏️";
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
      return "Sagittarius ♐️";
    }
  };

  const handleBirthdateChange = (event) => {
    setBirthdate(event.target.value);
    const birthdate = new Date(event.target.value);
    const zodiacSign = getZodiacSign(birthdate.getDate(), birthdate.getMonth() + 1);
    const message = zodiacMessages[zodiacSign];
    setSignText(message);
    setModalGreetings(`Hey you  ${zodiacSign}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${Name}, Birthdate: ${Birthdate}`);
    setIsModal(false);
    // You can save the values here
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      // const seconds = now.getSeconds().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);

      if (hours < 12) {
        setGreetings('Good morning, ');
      } else if (hours < 17) {
        setGreetings('Good afternoon, ');
      } else {
        setGreetings('Good evening, ');
      }
    }, 1000);

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen z-50">

      <div>
        <div className="text-white text-[100px] font-bold z-50 select-none drop-shadow-lg">
            {time}
        </div>
        <div className="text-white text-[25px] drop-shadow-lg z-50 select-none">
            {greetings} {Name}
        </div>

          {/* Tasks */}
          <div>
            <ul className="absolute top-0 right-0 m-4 flex flex-col justify-center items-center gap-3 z-50">
              {Tasks.map((task, index) => (
                <li 
                  key={index} 
                  className="h-[7vh] w-[25vw] select-none text-white flex flex-row justify-center items-center backdrop-filter backdrop-blur-sm bg-opacity-40 rounded-xl overflow-hidden bg-teal-400 transition transform hover:scale-105 hover:bg-cyan-300 hover:backdrop-blur-sm hover:bg-opacity-55 "
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

      {/* Overlay Modal */}
      {isModal && (

      <div className="absolute  h-[100vh] w-[100vw] flex flex-col justify-center items-center backdrop-blur-3xl bg-black backdrop-filter overflow-hidden bg-opacity-15 z-60">

          <div className="absolute h-[50vh] w-[50vh] flex flex-col justify-center items-center z-500 rounded-3xl backdrop-blur-3xl bg-white backdrop-filter overflow-hidden bg-opacity-20 drop-shadow-lg text-white">

            <div>
              <form onSubmit={handleSubmit} className="flex flex-col items-center gap-7 pb-6">

                <div className="text-[20px] font-bold drop-shadow-lg"> 
                  {modalGreetings}
                </div>

                <div className="flex flex-row justify-center items-center gap-5">
                  
                  <div className="p-2 text-[15px] font-bold drop-shadow-lg"> 
                    Name: 
                  </div>

                  <input 
                    type="text" 
                    value={Name} 
                    onChange={handleNameChange} 
                    className="p-2 border-2 text-[15px] rounded-md bg-black bg-opacity-20 border-none placeholder-white text-white" 
                    placeholder="Reanu Keeves" 
                  />

                </div>

                <div className="flex flex-row justify-center items-center gap-5">
                  <div className="p-2 text-[15px] font-bold drop-shadow-lg"> 
                    Birthdate: 
                  </div>

                  <input 
                    type="date" 
                    value={Birthdate} 
                    onChange={handleBirthdateChange} 
                    className="p-2 border-2 rounded-md bg-black bg-opacity-20 border-none placeholder-white text-white" 
                    placeholder="Birthdate (MM/DD/YYYY)" 
                  />

                </div>

                <button type="submit" className="p-2 bg-teal-400 text-white rounded-md bg-opacity-50">Submit</button>

              </form>
            </div>

          </div>

      </div>

      )}

    {!isModal && (
      <div className="absolute bottom-0 left-0 m-5 h-[20vh] w-[20vw] flex flex-row justify-center items-center text-white text-[10px] font-light drop-shadow-lg z-50 select-none overflow-auto whitespace-normal">
        {signText}
      </div>
    )}



    </div>
  )
}

Home.propTypes = {
  Tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
  Name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  Birthdate: PropTypes.string.isRequired,
  setBirthdate: PropTypes.func.isRequired,
  isModal: PropTypes.bool.isRequired,
  setIsModal: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  setTime: PropTypes.func.isRequired,
  greetings: PropTypes.string.isRequired,
  setGreetings: PropTypes.func.isRequired,
  signText: PropTypes.string.isRequired,
  setSignText: PropTypes.func.isRequired,
};

export default Home