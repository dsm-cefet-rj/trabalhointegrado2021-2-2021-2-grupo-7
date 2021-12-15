import { useState } from 'react';

import { Header } from '../../components/Header';

import rightArrowIcon from '../../assets/right-arrow.svg';

import styles from './styles.module.css';

function SelecionarData() {
  const [data, setData] = useState(new Date().toLocaleDateString());

  return (
    <div className="content">
      <main className={styles.principal}>
        <Header />

        <form action="#" className={styles.formulario}>
          <h2>Selecione o dia desejado:</h2>

          <input type="text" placeholder="Data" value={data} />

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
