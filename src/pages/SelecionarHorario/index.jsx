import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAgendamento } from '../../hooks/useAgendamento';

import { Header } from '../../components/Header';

import rightArrowIcon from '../../assets/right-arrow.svg';

import { horarios as utilHorarios } from '../../Utils/horarios';

import styles from './styles.module.css';

function SelecionarHorario() {
  const [horarios, setHorarios] = useState(utilHorarios);

  const { setHorarioSelecionado } = useAgendamento();

  const navigate = useNavigate();

  function handleBotaoProximaTela() {
    navigate(`/selecionar-funcionario`);
  }

  function removeSelecao(id) {
    const novosHorarios = horarios.map(horario => {
      if (horario.id === id) {
        horario.selecionado = false;
        setHorarioSelecionado(null);
      }

      return horario;
    });

    setHorarios(novosHorarios);
  }

  function removeSelecionado() {
    const novosHorarios = horarios.map(horario => {
      if (horario.selecionado) {
        horario.selecionado = false;
      }

      return horario;
    });

    setHorarios(novosHorarios);
  }

  function adicionaSelecao(id) {
    const novosHorarios = horarios.map(horario => {
      if (horario.id === id && horario.disponivel) {
        removeSelecionado();
        horario.selecionado = true;
        setHorarioSelecionado(horario);
      }

      return horario;
    });

    setHorarios(novosHorarios);
  }

  function handleSelecionarHorario(horario) {
    if (horario.selecionado) {
      removeSelecao(horario.id);
    } else {
      adicionaSelecao(horario.id);
    }
  }

  return (
    <div className="content">
      <Header />

      <main className={styles.principal}>
        <form onSubmit={handleBotaoProximaTela}>
          <h2>Selecione o horário desejado:</h2>
          <div className={styles.horarios}>
            {horarios.map(horario => (
              <button
                key={horario.id}
                type="button"
                onClick={() => handleSelecionarHorario(horario)}
                className={
                  styles.horario +
                  (horario.selecionado
                    ? ' ' + styles.selecionado
                    : horario.disponivel
                    ? ' ' + styles.disponivel
                    : '')
                }
                disabled={!horario.disponivel}
              >
                <strong>{horario.valor}</strong>
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

export { SelecionarHorario };
