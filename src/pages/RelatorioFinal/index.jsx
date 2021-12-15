import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Funcionario } from '../../components/RelatorioFinal/Funcionario';
import { Secao } from '../../components/RelatorioFinal/Secao';
import { Servico } from '../../components/RelatorioFinal/Servico';

import tesouraImagem from '../../assets/tesouras.png';
import maquinaImagem from '../../assets/maquina-de-cortar-cabelo.png';
import buttonImage from '../../assets/check.svg';

import styles from './styles.module.css';

function RelatorioFinal() {
  const navigate = useNavigate();

  function handleConcluir() {
    navigate(`/`);
  }

  return (
    <div class="content">
      <Header />

      <main className={styles.principal}>
        <form onSubmit={handleConcluir}>
          <h2>Confirme os dados do agendamento:</h2>

          <div className={styles.relatorioContainer}>
            <Secao titulo="Cliente">
              <p>
                <strong>Nome: </strong>
                <span>Zézinho Exemplo</span>
              </p>
              <p>
                <strong>Numero de contato: </strong>
                <span>(21) 1234-5678</span>
              </p>
            </Secao>

            <Secao titulo="Data">
              <p>
                <strong>Dia: </strong>
                <span>17/12/2021</span>
              </p>
              <p>
                <strong>Horário: </strong>
                <span> 9:00 </span>
              </p>
            </Secao>

            <Secao titulo="Funcionário">
              <Funcionario nome="Funcionario 2" />
            </Secao>

            <Secao titulo="Serviços">
              <div className={styles.sevicos}>
                <Servico nome="Tesoura" imagem={tesouraImagem} />
                <Servico nome="Máquina" imagem={maquinaImagem} />
              </div>
            </Secao>

            <div className={styles.valorFinal}>
              <p>
                Valor total: <span>R$ 30,00</span>
              </p>
            </div>
          </div>

          <button type="submit">
            <img src={buttonImage} alt="seta" className={styles.icone} />
            Concluir
          </button>
        </form>
      </main>
    </div>
  );
}

export { RelatorioFinal };
