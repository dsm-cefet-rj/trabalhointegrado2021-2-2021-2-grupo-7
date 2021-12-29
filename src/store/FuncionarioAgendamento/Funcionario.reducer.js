export function funcionarioReducer(state = {}, action) {
  switch (action.type) {
    case 'SELECIONAR_FUNCIONARIO':
      return action.payload;

    default:
      return state;
  }
}
