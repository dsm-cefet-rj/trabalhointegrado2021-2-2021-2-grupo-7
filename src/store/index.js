import { createStore, combineReducers } from 'redux';
import { dataReducer } from './DataAgendamento/Data.reducer';
import { horarioReducer } from './HorarioAgendamento/Horario.reducer';

const rootReducer = combineReducers({
  data: dataReducer,
  horario: horarioReducer,
});

const store = createStore(rootReducer);

export { store };
