import { useNavigate } from 'react-router-dom';

import { useAgendamento } from '../../hooks/useAgendamento';

import { Header } from '../../components/Header';

import rightArrowIcon from '../../assets/right-arrow.svg';

import styles from './styles.module.css';

function SelecionarData() {
  const { data, setData } = useAgendamento();

  const navigate = useNavigate();

  function handleBotaoProximaTela() {
    navigate(`/selecionar-horario`);
  }

  return (
    <div className="content">
      <main className={styles.principal}>
        <Header />

        <form className={styles.formulario} onSubmit={handleBotaoProximaTela}>
          <h2>Selecione o dia desejado:</h2>

          <input
            type="text"
            placeholder="Data"
            value={data}
            onChange={event => setData(event.target.value)}
          />

          <button type="submit">
            <img src={rightArrowIcon} alt="seta" />
            Proximo
          </button>
        </form>
      </main>
    </div>
  );
}

export { SelecionarData };
