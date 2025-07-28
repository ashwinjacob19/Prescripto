import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home'
import Doctors from './assets/pages/Doctors'
import Login from './assets/pages/Login'
import About from './assets/pages/About'
import Contact from './assets/pages/Contact'
import Myprofile from './assets/pages/MyProfile'
import MyAppointments from './assets/pages/MyAppointments'
import Appointment from './assets/pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/doctors' element={<Doctors />}/>
        <Route path='/doctors/:speciality' element={<Doctors />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/my-profile' element={<Myprofile />}/>
        <Route path='/my-appointments' element={<MyAppointments />}/>
        <Route path='/appointent/:docId' element={<Appointment />}/>
      </Routes>
      <Footer />
    </div>
  )
}
export default App