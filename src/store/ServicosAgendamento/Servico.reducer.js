export function servicoReducer(state = [], action) {
  switch (action.type) {
    case 'SELECIONAR_SERVICO':
      return [...state, action.payload];

    case 'REMOVER_SERVICO':
      return state.filter(servico => servico.id !== action.payload);

    default:
      return state;
  }
}
