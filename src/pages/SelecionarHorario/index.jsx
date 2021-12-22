import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';

import rightArrowIcon from '../../assets/right-arrow.svg';
import { horarios as utilHorarios } from '../../Utils/horarios';

import styles from './styles.module.css';

function SelecionarHorario() {
  const [horarios, setHorarios] = useState(utilHorarios);

  const navigate = useNavigate();

  function handleBotaoProximaTela() {
    navigate(`/selecionar-servico`);
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
                type="button"
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
