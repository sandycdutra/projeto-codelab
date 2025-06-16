import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Groceries from './pages/Groceries';
import Clothing from './pages/Clothing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groceries" element={<Groceries />} />
        <Route path="/clothing" element={<Clothing />} />
      </Routes>
    </Router>
  );
}

export default App;