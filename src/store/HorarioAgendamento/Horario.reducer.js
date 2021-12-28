export function horarioReducer(state = {}, action) {
  switch (action.type) {
    case 'SELECIONAR_HORARIO':
      return action.payload;

    default:
      return state;
  }
}
