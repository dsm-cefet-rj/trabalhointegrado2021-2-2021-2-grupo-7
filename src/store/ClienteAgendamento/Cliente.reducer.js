export function clienteReducer(state = {}, action) {
  switch (action.type) {
    case 'SELECIONAR_CLIENTE':
      return action.payload;

    default:
      return state;
  }
}
