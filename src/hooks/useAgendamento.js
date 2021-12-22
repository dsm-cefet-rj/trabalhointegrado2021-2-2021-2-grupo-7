import { useContext } from 'react';
import { AgendamentoContext } from '../contexts/AgendamentoContext';

export function useAgendamento() {
  const value = useContext(AgendamentoContext);

  return value;
}
