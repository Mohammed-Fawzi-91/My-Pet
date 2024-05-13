import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import MainPetPage from './pages/MainPetPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
     
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route  path="/MainPetPage" element={<MainPetPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
