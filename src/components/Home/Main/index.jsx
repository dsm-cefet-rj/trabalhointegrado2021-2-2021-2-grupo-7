import calendarioIcon from '../../../assets/calendario.svg';
import loginIcon from '../../../assets/login.svg';

import styles from './styles.module.css';

function Main() {
  return (
    <main className={styles.principal}>
      <div className={styles.acoes}>
        <a href="#" className={styles.acaoItem + ' ' + styles.acaoVermelho}>
          <img src={calendarioIcon} alt="calendario icone" />
          Agendar agora
        </a>

        <a href="#" className={styles.acaoItem + ' ' + styles.acaoHover}>
          <img src={loginIcon} alt="login icone" />
          Login
        </a>
      </div>
    </main>
  );
}

export { Main };
