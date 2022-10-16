import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Shared/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Appointment from './pages/Appointment/Appointment';
import Signup from './pages/Login/Signup';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="appointment" element={<Appointment/>} />
      </Routes>
    </div>
  );
}

export default App;
