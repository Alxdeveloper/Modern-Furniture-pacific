 import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './pages/Footer';
import Hero from './pages/Hero';
import Login from './pages/Login';
import Products from './pages/Products';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './pages/Register';
import About from './pages/About';
import Testmonials from './pages/Testmonials';
import ContactUs from './pages/ContactUs';
import Profile from './sideBar/Profile';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Hero/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/testmonials' element={<Testmonials/>} />
          <Route path='/contacts' element={<ContactUs/>} />
          <Route path="/profile" element={<Profile />} />
          
        </Routes>
      </Router>
      
      <Footer/>
  
     </div>
  );
}

export default App;
