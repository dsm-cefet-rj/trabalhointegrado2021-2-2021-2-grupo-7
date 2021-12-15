import logo from '../assets/logo.png';

import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.conteudo}>
        <div className={styles.headerLogo}>
          <img src={logo} alt="logo" />
        </div>

        <div className={styles.headerContent}>
          <h2>Barbearia Corte Certo</h2>
        </div>
      </div>
    </header>
  );
}

export { Header };
