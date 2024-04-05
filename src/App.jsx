import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Template from "./components/Template";
import Home from "./components/Home";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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

  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [isModal, setIsModal] = useState(true);

  const [time, setTime] = useState('');

  const [tasks, setTasks] = useState([]);

  const [greetings, setGreetings] = useState("Good morning, ");
  const [signText, setSignText] = useState("");

  const [day, setDay] = useState("Monday");

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <>
      <Navbar currentPath={currentPath} />
      
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<Home Tasks={tasks} setTasks={setTasks} Name={name} setName={setName} Birthdate={birthdate} setBirthdate={setBirthdate} isModal={isModal} setIsModal={setIsModal} time={time} setTime={setTime} greetings={greetings} setGreetings={setGreetings} signText={signText} setSignText={setSignText} day={day} setDay={setDay} />} />
          <Route path="/pomodoro" element={<Pomodoro Tasks={tasks} setTasks={setTasks}/>} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;