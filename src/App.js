import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Routes } from 'react-router';
import HomePage from './components/Pages/HomePage';
import AboutPage from './components/Pages/AboutPage';

// import {a,b} from './Products'; // destructuring in JS
function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutPage/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
