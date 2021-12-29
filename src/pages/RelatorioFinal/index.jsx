import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { handleCurrency } from '../../Utils/UtilNumero';

import { Header } from '../../components/Header';
import { Funcionario } from '../../components/RelatorioFinal/Funcionario';
import { Secao } from '../../components/RelatorioFinal/Secao';
import { Servico } from '../../components/RelatorioFinal/Servico';

import buttonImage from '../../assets/check.svg';

import styles from './styles.module.css';
import { api } from '../../services/api';

function RelatorioFinal() {
  const navigate = useNavigate();

  const data = useSelector(state => state.data);
  const horario = useSelector(state => state.horario);
  const funcionario = useSelector(state => state.funcionario);
  const servicos = useSelector(state => state.servicos);
  const cliente = useSelector(state => state.cliente);

  function handleConcluir() {
    navigate(`/conclusao`);
  }

  function getValorTotal() {
    const valorTotal = servicos.reduce((acc, servico) => {
      acc += Number(servico.valor);
      return acc;
    }, 0);

    return valorTotal;
  }

  return (
    <div className="content">
      <Header />

      <main className={styles.principal}>
        <form onSubmit={handleConcluir}>
          <h2>Confirme os dados do agendamento:</h2>

          <div className={styles.relatorioContainer}>
            <Secao titulo="Cliente">
              <p>
                <strong>Nome: </strong>
                <span>{cliente.nome}</span>
              </p>
              <p>
                <strong>Numero de contato: </strong>
                <span>{cliente.telefone}</span>
              </p>
            </Secao>

            <Secao titulo="Data">
              <p>
                <strong>Dia: </strong>
                <span>{data}</span>
              </p>
              <p>
                <strong>Horário: </strong>
                <span> {horario.valor} </span>
              </p>
            </Secao>

            <Secao titulo="Funcionário">
              <Funcionario funcionario={funcionario} />
            </Secao>

            <Secao titulo="Serviços">
              <div className={styles.servicos}>
                {servicos.map(servico => (
                  <Servico key={servico.id} servico={servico} />
                ))}
              </div>
            </Secao>

            <div className={styles.valorFinal}>
              <p>
                Valor total:{' '}
                <span>{handleCurrency.format(getValorTotal())}</span>
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
