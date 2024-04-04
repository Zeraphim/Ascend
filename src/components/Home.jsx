
import PropTypes from 'prop-types';
import { useState } from "react";


function Home({ Tasks, setTasks }) {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks([...Tasks, input]);
    setInput("");
  };
  
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-green-400">
      
      Home

        <div>
          <ul>
            {Tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      
    </div>
  )
}

Home.propTypes = {
  Tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default Home