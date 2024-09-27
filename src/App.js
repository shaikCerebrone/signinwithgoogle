import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/loginpage'; // Ensure imports are capitalized
import Success from './pages/successpage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Correct the path syntax and remove unnecessary quotes */}
        <Route path="/" element={<Login />} /> 
        <Route path="/success" element={<Success />} /> 
      </Routes>
    </Router>
  );
}

export default App;

