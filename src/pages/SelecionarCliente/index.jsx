import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import InputMask from 'react-input-mask';
import { Header } from '../../components/Header';
import rightArrowIcon from '../../assets/right-arrow.svg';
import styles from './styles.module.css';
import { selecionarCliente } from '../../store/ClienteAgendamento/Cliente.actions';

function SelecionarCliente() {
  const [nome, setNome] = useState(null);
  const [telefone, setTelefone] = useState(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleBotaoProximaTela() {
    dispatch(
      selecionarCliente({
        nome,
        telefone,
      }),
    );

    navigate(`/selecionar-data`);
  }

  return (
    <div className={styles.content}>
      <Header />

      <main className={styles.principal}>
        <form onSubmit={handleBotaoProximaTela}>
          <h2>Digite seus dados:</h2>

          <input
            type="text"
            className={styles.formNome}
            placeholder="Nome e sobrenome"
            value={nome}
            onChange={event => setNome(event.target.value)}
          />

          <InputMask
            className={styles.formTel}
            mask="(99) 99999-9999"
            value={telefone}
            onChange={event => setTelefone(event.target.value)}
            placeholder="telefone para contato"
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

export { SelecionarCliente };
