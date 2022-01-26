export function selecionarServico(servico) {
  return {
    type: 'SELECIONAR_SERVICO',
    payload: servico,
  };
}

export function removerServico(id) {
  return {
    type: 'REMOVER_SERVICO',
    payload: id,
  };
}
