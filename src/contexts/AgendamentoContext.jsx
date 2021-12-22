import { useState, createContext } from 'react';

// export type HomeContextProps = {
//   isHomePage: boolean;
//   setIsHomePage: Dispatch<SetStateAction<boolean>>;
// };

export const AgendamentoContext = createContext({});

export function AgendamentoContextProvider(props) {
  const { children } = props;

  const [horarioSelecionado, setHorarioSelecionado] = useState(null);
  const [servicoSelecionado, setServicoSelecionado] = useState(null);
  // const [isHomePage, setIsHomePage] = useState(true);
  // const [isHomePage, setIsHomePage] = useState(true);
  // const [isHomePage, setIsHomePage] = useState(true);
  // const [isHomePage, setIsHomePage] = useState(true);
  // const [isHomePage, setIsHomePage] = useState(true);

  return (
    <AgendamentoContext.Provider
      value={{ horarioSelecionado, setHorarioSelecionado, servicoSelecionado , setServicoSelecionado }}
    >
      {children}
    </AgendamentoContext.Provider>
  );
}
