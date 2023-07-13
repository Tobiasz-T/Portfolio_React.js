import React from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Skils from './pages/Skils';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/projects' element={<Projects/>} />
    <Route exact path='/experience' element={<Experience/>} />
    <Route exact path='/skils' element={<Skils/>} />
    <Route exact path='/contact' element={<Contact/>} />
</Routes> 
<Footer/>
</BrowserRouter>
</>
  );
}

export default App;
