import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Alimentacao from './pages/Alimentacao';
import Vestimenta from './pages/Vestimenta';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>  {/* Adicione o Router aqui */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alimentacao" element={<Alimentacao />} />
        <Route path="/vestimenta" element={<Vestimenta />} />
      </Routes>
    </Router>
  );
}

export default App;