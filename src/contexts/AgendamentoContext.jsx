import { useState, createContext } from 'react';

export const AgendamentoContext = createContext({});

export function AgendamentoContextProvider(props) {
  const { children } = props;

  const [horarioSelecionado, setHorarioSelecionado] = useState(null);
  const [servicoSelecionado, setServicoSelecionado] = useState(null);
  const [funcionarioSelecionado, setFuncSelecionado] = useState(null);
  const [cliente, setCliente] = useState(null);

  return (
    <AgendamentoContext.Provider
      value={{
        horarioSelecionado,
        setHorarioSelecionado,

        servicoSelecionado,
        setServicoSelecionado,

        funcionarioSelecionado,
        setFuncSelecionado,

        cliente,
        setCliente,
      }}
    >
      {children}
    </AgendamentoContext.Provider>
  );
}
