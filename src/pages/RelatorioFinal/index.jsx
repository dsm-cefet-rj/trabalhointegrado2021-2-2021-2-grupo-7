import { useNavigate } from 'react-router-dom';

import { useAgendamento } from '../../hooks/useAgendamento';
import { handleCurrency } from '../../Utils/UtilNumero';

import { Header } from '../../components/Header';
import { Funcionario } from '../../components/RelatorioFinal/Funcionario';
import { Secao } from '../../components/RelatorioFinal/Secao';
import { Servico } from '../../components/RelatorioFinal/Servico';

import buttonImage from '../../assets/check.svg';

import styles from './styles.module.css';

function RelatorioFinal() {
  const navigate = useNavigate();

  const {
    data,
    horarioSelecionado,
    servicoSelecionado,
    funcionarioSelecionado,
  } = useAgendamento();

  function handleConcluir() {
    navigate(`/conclusao`);
  }

  function getValorTotal() {
    const valorTotal = servicoSelecionado.reduce((acc, servico) => {
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
                <span>{data}</span>
              </p>
              <p>
                <strong>Horário: </strong>
                <span> {horarioSelecionado.valor} </span>
              </p>
            </Secao>

            <Secao titulo="Funcionário">
              <Funcionario funcionario={funcionarioSelecionado} />
            </Secao>

            <Secao titulo="Serviços">
              <div className={styles.servicos}>
                {servicoSelecionado.map(servico => (
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
