import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/home';
import { SelecionarData } from './pages/SelecionarData';
import { SelecionarHorario } from './pages/SelecionarHorario';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selecionar-data" element={<SelecionarData />} />
        <Route path="/selecionar-horario" element={<SelecionarHorario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
