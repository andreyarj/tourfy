import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Gastronomy from './Pages/Gastronomy';
import Family from './Pages/Family';
import History from './Pages/History';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/gastronomy" element={<Gastronomy />} />
        <Route path="/dashboard/family" element={<Family />} />
        <Route path="/dashboard/history" element={<History />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
