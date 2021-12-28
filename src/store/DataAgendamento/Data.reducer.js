export function dataReducer(state = new Date().toLocaleDateString(), action) {
  switch (action.type) {
    case 'SELECIONAR_DATA':
      return action.payload;

    default:
      return state;
  }
}
