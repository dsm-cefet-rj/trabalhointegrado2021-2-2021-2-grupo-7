import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';

import checkIcon from '../../assets/check.svg';

import styles from './styles.module.css';

function Conclusao() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate(`/`);
  }, 20000);

  return (
    <>
      <Header />
      <main className={styles.principal}>
        <div>
          <img src={checkIcon} alt="" />
          <h2>Agendado com sucesso!</h2>
          <p>
            Obrigado pela preferência e <br />
            estaremos te esperando!
          </p>
        </div>
      </main>
    </>
  );
}

export { Conclusao };
