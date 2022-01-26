import rightArrowIcon from '../../assets/right-arrow.svg';
import styles from './styles.module.css';
import { Header } from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { handleCurrency } from '../../Utils/UtilNumero';
import { api } from '../../services/api';
import { useDispatch, useSelector } from 'react-redux';
import {
  removerServico,
  selecionarServico,
} from '../../store/ServicosAgendamento/Servico.actions';

function SelecionarServico() {
  const [preparado, setPreparado] = useState(false);
  const [servicos, setServicos] = useState(null);

  const servicosSelecionados = useSelector(state => state.servicos);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    api.get('/servicos').then(res => {
      setServicos(res.data);
      setPreparado(true);
    });
  });

  function handleBotaoProximaTela() {
    navigate(`/confirmar-agendamento`);
  }

  function handleSelecionarServico(servico) {
    if (
      servicosSelecionados.some(
        servicoSelecionado => servicoSelecionado.id === servico.id,
      )
    ) {
      dispatch(removerServico(servico.id));
    } else {
      dispatch(selecionarServico(servico));
    }
  }

  function verificaSelecao(id) {
    const achou = servicosSelecionados.some(servico => servico.id === id);
    return achou;
  }

  if (!preparado) {
    return '';
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
                  (verificaSelecao(servico.id) ? ` ${styles.selecionado}` : '')
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
