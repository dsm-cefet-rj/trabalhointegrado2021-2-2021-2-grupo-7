import { servicos } from '../../Utils/servicos';

import rightArrowIcon from '../../assets/right-arrow.svg';

import styles from './styles.module.css';
import { Header } from '../../components/Header';
import { useNavigate } from 'react-router-dom';

function SelecionarServico() {
  const navigate = useNavigate();

  function handleBotaoProximaTela() {
    navigate(`/confirmar-agendamento`);
  }
  return (
    <>
      <Header />
      <main className={styles.principal}>
        <form onSubmit={handleBotaoProximaTela}>
          <h2>Selecione os serviços que deseja:</h2>
          <div className={styles.servicos}>
            {servicos.map(servico => (
              <button
                type="button"
                className={
                  styles.servico +
                  (servico.selecionado ? ` ${styles.selecionado}` : '')
                }
              >
                <img src={servico.imagem} alt="funcionário imagem" />
                <strong>{servico.nome}</strong>
                <p>R$ {servico.valor}</p>
              </button>
            ))}
          </div>

          <button type="submit">
            <img src={rightArrowIcon} alt="seta" className={styles.icone} />
            Proximo
          </button>
        </form>
      </main>
    </>
  );
}

export { SelecionarServico };