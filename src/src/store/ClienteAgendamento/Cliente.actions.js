export function selecionarCliente(cliente) {
  return {
    type: 'SELECIONAR_CLIENTE',
    payload: cliente,
  };
}
