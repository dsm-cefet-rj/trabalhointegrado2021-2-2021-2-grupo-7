import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store';

import { Home } from './pages/home';
import { SelecionarData } from './pages/SelecionarData';
import { SelecionarHorario } from './pages/SelecionarHorario';
import { RelatorioFinal } from './pages/RelatorioFinal';
import { SelecionarServico } from './pages/SelecionarServico';
import { SelecionarFuncionario } from './pages/SelecionarFuncionario';
import { Conclusao } from './pages/Conclusao';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/selecionar-data" element={<SelecionarData />} />
          <Route path="/selecionar-horario" element={<SelecionarHorario />} />
          <Route path="/confirmar-agendamento" element={<RelatorioFinal />} />
          <Route path="/selecionar-servico" element={<SelecionarServico />} />
          <Route path="/conclusao" element={<Conclusao />} />
          <Route
            path="/selecionar-funcionario"
            element={<SelecionarFuncionario />}
          />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
