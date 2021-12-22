import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAgendamento }from '../../hooks/useAgendamento';
import { Header } from '../../components/Header';

import rightArrowIcon from '../../assets/right-arrow.svg';

import { funcs as utilFunc } from '../../Utils/funcionarios';

import styles from './styles.module.css';

function SelecionarFuncionario() {
  const [funcs, setFunc] = useState(utilFunc);
  const navigate = useNavigate();
  const { setFuncSelecionado } = useAgendamento();

  function handleBotaoProximaTela() {
    navigate(`/selecionar-servico`);
  }
  function removeSelecao(id) {
    const novosFunc = funcs.map(func => {
      if (func.id === id) {
        func.selecionado = false;
        setFuncSelecionado(func);
      }

      return func;
    });

    setFunc(novosFunc);
  }

  function removeSelecionado() {
    const novosFunc = funcs.map(func => {
      if (func.selecionado) {
        func.selecionado = false;
      }

      return func;
    });

    setFunc(novosFunc);
  }

  function adicionaSelecao(id) {
    const novosFunc = funcs.map(func => {
      if (func.id === id) {
        removeSelecionado();
        func.selecionado = true;
        setFuncSelecionado(func);
      }

      return func;
    });

    setFunc(novosFunc);
  }

  function handleSelecionarFunc(func) {
    if (func.selecionado) {
      removeSelecao(func.id);
    } else {
      adicionaSelecao(func.id);
    }
  }

return (
    <div className="content">
      <Header />

      <main className={styles.principalfunc}>
        <form onSubmit={handleBotaoProximaTela}>
          <h2>Selecione o Barbeiro desejado:</h2>
          <div className={styles.funcionarios}>
            {funcs.map(func => (
              <button key={func.id}
              type="button"
              onClick={() => handleSelecionarFunc(func)}
              className={ 
                  styles.func + 
                  (func.selecionado
                  ? ' ' + styles.selecionado
                  : '')
                }

              >
                <p>{func.valor}</p>    
              
                <img src={func.foto} alt="Barbeiro" className={styles.img}/>

                <h3>{func.especialidade}</h3>  
              </button>
            ))}
          </div>

          <button type="submit">           
            <img src={rightArrowIcon} alt="seta" className={styles.icone} />
            Proximo
          </button>
        </form>
      </main>
    </div>
  );
}

export { SelecionarFuncionario };
