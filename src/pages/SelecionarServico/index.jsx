import { servicos as utilServicos } from '../../Utils/servicos';

import rightArrowIcon from '../../assets/right-arrow.svg';
import { useAgendamento } from '../../hooks/useAgendamento';
import styles from './styles.module.css';
import { Header } from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { handleCurrency } from '../../Utils/UtilNumero';

function SelecionarServico() {
  const navigate = useNavigate();
  const { setServicoSelecionado } = useAgendamento();
  const [servicos, setServicos] = useState(utilServicos);

  function handleBotaoProximaTela() {
    navigate(`/confirmar-agendamento`);
  }

  function removeSelecao(id) {
    const novosServicos = servicos.map(servico => {
      if (servico.id === id) {
        servico.selecionado = false;
        setServicoSelecionado(listarSelecionados());
      }

      return servico;
    });

    setServicos(novosServicos);
  }

  function listarSelecionados() {
    return servicos.filter(servico => servico.selecionado);
  }

  function adicionaSelecao(id) {
    const novosServicos = servicos.map(servico => {
      if (servico.id === id) {
        servico.selecionado = true;
        setServicoSelecionado(listarSelecionados());
      }

      return servico;
    });

    setServicos(novosServicos);
  }

  function handleSelecionarServico(servico) {
    if (servico.selecionado) {
      removeSelecao(servico.id);
    } else {
      adicionaSelecao(servico.id);
    }
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
                key={servico.id}
                type="button"
                onClick={() => handleSelecionarServico(servico)}
                className={
                  styles.servico +
                  (servico.selecionado ? ` ${styles.selecionado}` : '')
                }
              >
                <img src={servico.imagem} alt="funcionário imagem" />
                <strong>{servico.nome}</strong>
                <p>{handleCurrency.format(servico.valor)}</p>
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
