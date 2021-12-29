export function selecionarFuncionario(funcionario) {
  return {
    type: 'SELECIONAR_FUNCIONARIO',
    payload: funcionario,
  };
}

export function removerFuncionario() {
  return {
    type: 'SELECIONAR_FUNCIONARIO',
    payload: {},
  };
}
