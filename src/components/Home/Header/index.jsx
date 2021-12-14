import logo from '../../../assets/logo.png';

import styles from './styles.module.css';

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.conteudo}>
        <div>
          <img className={styles.logo} src={logo} alt="logo" />
        </div>

        <div className={styles.textos}>
          <h1>Barbearia Corte Certo</h1>
          <p>De segunda a sexta das 8h as 19h</p>
        </div>
      </div>
    </header>
  );
}

export { Header };
