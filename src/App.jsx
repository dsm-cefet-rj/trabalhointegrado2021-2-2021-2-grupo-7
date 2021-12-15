import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/home';
import { SelecionarData } from './pages/SelecionarData';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selecionar-data" element={<SelecionarData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
