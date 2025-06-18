import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Groceries from './pages/Groceries';
import Clothing from './pages/Clothing';
import Electronics from './pages/Electronics';
import Total from './pages/Total';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groceries" element={<Groceries />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/total" element={<Total />} />
      </Routes>
    </Router>
  );
}

export default App;