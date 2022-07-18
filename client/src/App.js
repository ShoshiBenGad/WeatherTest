import React , {useState} from "react";
import './App.css';
import Weather from './pages/Weather';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [userName, setUserName] = useState('');


  return (
    <Router>
    <div className="App">
    <Routes>
          <Route path="/" element={<Login userName={userName} setUserName={setUserName}/>} />
          <Route path="/weather" element={<Weather userName={userName}/>} />
          <Route component={NotFound} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
