import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Template from "./components/Template";
import Home from "./components/Home";

import Navbar from "./components/Navbar";
import Pomodoro from "./components/Pomodoro";

import Error from "./components/Error";

import "./output.css"

function App() {
  return (
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  );
}

function MainComponent() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <>
      <Navbar currentPath={currentPath} />
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<Home Tasks={tasks} setTasks={setTasks}/>} />
          <Route path="/pomodoro" element={<Pomodoro Tasks={tasks} setTasks={setTasks}/>} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;