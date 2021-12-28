export function selecionarHorario(horarioAgendamento) {
  return {
    type: 'SELECIONAR_HORARIO',
    payload: horarioAgendamento,
  };
}

export function removerHorario() {
  return {
    type: 'SELECIONAR_HORARIO',
    payload: {},
  };
}
