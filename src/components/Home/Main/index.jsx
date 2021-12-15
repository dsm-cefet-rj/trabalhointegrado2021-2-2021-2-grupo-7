import { Link } from 'react-router-dom';

import calendarioIcon from '../../../assets/calendario.svg';
import loginIcon from '../../../assets/login.svg';

import styles from './styles.module.css';

function Main() {
  function handleLogin(event) {
    event.preventDefault();
  }

  return (
    <main className={styles.principal}>
      <div className={styles.acoes}>
        <Link to="/" className={styles.acaoItem + ' ' + styles.acaoVermelho}>
          <img src={calendarioIcon} alt="calendario icone" />
          Agendar agora
        </Link>

        <Link
          to="/login"
          className={styles.acaoItem + ' ' + styles.acaoHover}
          onClick={handleLogin}
        >
          <img src={loginIcon} alt="login icone" />
          Login
        </Link>
      </div>
    </main>
  );
}

export { Main };
