import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import {
  selecionarHorario,
  removerHorario,
} from '../../store/HorarioAgendamento/Horario.actions';

import { api } from '../../services/api';

import { Header } from '../../components/Header';

import rightArrowIcon from '../../assets/right-arrow.svg';

import styles from './styles.module.css';
import { useEffect, useState } from 'react';

function SelecionarHorario() {
  const [horarios, setHorarios] = useState(null);

  const horarioSelecionado = useSelector(state => state.horario);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    loadHorarios();
  }, []);

  async function loadHorarios() {
    const horariosAux = (await api.get('/horarios')).data;

    setHorarios(horariosAux);
  }

  function handleBotaoProximaTela() {
    navigate(`/selecionar-funcionario`);
  }

  function handleSelecionarHorario(horario) {
    if (horario.id === horarioSelecionado.id && horario.disponivel) {
      dispatch(removerHorario());
    } else {
      dispatch(selecionarHorario(horario));
    }
  }

  function verificaSelecao(id) {
    if (id === horarioSelecionado.id) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="content">
      <Header />

      <main className={styles.principal}>
        <form onSubmit={handleBotaoProximaTela}>
          <h2>Selecione o horário desejado:</h2>
          <div className={styles.horarios}>
            {horarios !== null
              ? horarios.map(horario => (
                  <button
                    key={horario.id}
                    type="button"
                    onClick={() => handleSelecionarHorario(horario)}
                    className={
                      styles.horario +
                      (verificaSelecao(horario.id)
                        ? ' ' + styles.selecionado
                        : horario.disponivel
                        ? ' ' + styles.disponivel
                        : '')
                    }
                    disabled={!horario.disponivel}
                  >
                    <strong>{horario.valor}</strong>
                  </button>
                ))
              : ''}
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

export { SelecionarHorario };
