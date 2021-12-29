import { useNavigate } from 'react-router-dom';
import DatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import { useSelector, useDispatch } from 'react-redux';

import { setData } from '../../store/DataAgendamento/Data.actions';

import { Header } from '../../components/Header';

import rightArrowIcon from '../../assets/right-arrow.svg';

import styles from './styles.module.css';
import './style.css';

registerLocale('ptBR', ptBR);

function SelecionarData() {
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleBotaoProximaTela() {
    navigate(`/selecionar-funcionario`);
  }

  function handleSelectData(valor) {
    const novaData = new Date(valor).toLocaleDateString();
    dispatch(setData(novaData));
  }

  return (
    <div className="content">
      <main className={styles.principal}>
        <Header />

        <form className={styles.formulario} onSubmit={handleBotaoProximaTela}>
          <h2>Selecione o dia desejado:</h2>

          <DatePicker
            onChange={handleSelectData}
            dateFormat="dd/MM/yyyy"
            locale="ptBR"
            className={styles.dataPicker}
            value={data}
            placeholderText="dd/mm/aaaa"
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
