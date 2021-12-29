import { createStore, combineReducers } from 'redux';
import { clienteReducer } from './ClienteAgendamento/Cliente.reducer';
import { dataReducer } from './DataAgendamento/Data.reducer';
import { funcionarioReducer } from './FuncionarioAgendamento/Funcionario.reducer';
import { horarioReducer } from './HorarioAgendamento/Horario.reducer';
import { servicoReducer } from './ServicosAgendamento/Servico.reducer';

const rootReducer = combineReducers({
  data: dataReducer,
  horario: horarioReducer,
  funcionario: funcionarioReducer,
  servicos: servicoReducer,
  cliente: clienteReducer,
});

const store = createStore(rootReducer);

export { store };
