import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Shared/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Appointment from './pages/Appointment/Appointment';
import Signup from './pages/Login/Signup';
import RequireAuth from './pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard';
import MyAppointments from './pages/Dashboard/MyAppointments';
import MyReviews from './pages/Dashboard/MyReviews';


function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="appointment" element={
          <RequireAuth>
            <Appointment/>
          </RequireAuth>
        } />
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard/>
          </RequireAuth>
        } >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='my-reviews' element={<MyReviews></MyReviews>}></Route>

        </Route>
      </Routes>
      <ToastContainer />
    </div>
    
  );
}

export default App;
