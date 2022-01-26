import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  removerFuncionario,
  selecionarFuncionario,
} from '../../store/FuncionarioAgendamento/Funcionario.actions';
import { useSelector, useDispatch } from 'react-redux';
import { api } from '../../services/api';

import { Header } from '../../components/Header';

import rightArrowIcon from '../../assets/right-arrow.svg';

import styles from './styles.module.css';

function SelecionarFuncionario() {
  const [preparado, setPreparado] = useState(false);
  const [funcionarios, setFuncionarios] = useState(null);
  const navigate = useNavigate();

  const funcionarioSelecionado = useSelector(state => state.funcionario);
  const dispatch = useDispatch();

  useEffect(() => {
    api.get('/funcionarios').then(res => {
      setFuncionarios(res.data);
      setPreparado(true);
    });
  }, []);

  function handleBotaoProximaTela() {
    navigate(`/selecionar-horario`);
  }

  function handleSelecionarFunc(funcionario) {
    if (funcionario.id === funcionarioSelecionado.id) {
      dispatch(removerFuncionario());
    } else {
      dispatch(selecionarFuncionario(funcionario));
    }
  }

  function verificaSelecao(id) {
    if (id === funcionarioSelecionado.id) {
      return true;
    } else {
      return false;
    }
  }

  if (!preparado) {
    return '';
  }

  return (
    <div className="content">
      <Header />

      <main className={styles.principalfunc}>
        <form onSubmit={handleBotaoProximaTela}>
          <h2>Selecione o Barbeiro desejado:</h2>
          <div className={styles.funcionarios}>
            {funcionarios.map(func => (
              <button
                key={func.id}
                type="button"
                onClick={() => handleSelecionarFunc(func)}
                className={
                  styles.func +
                  (verificaSelecao(func.id) ? ' ' + styles.selecionado : '')
                }
              >
                <p>{func.nome}</p>

                <img src={func.foto} alt="Barbeiro" className={styles.img} />

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
