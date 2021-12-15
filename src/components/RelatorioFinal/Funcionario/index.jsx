import fotoFuncionario from '../../../assets/profile.png';

import styles from './styles.module.css';

function Funcionario(props) {
  const { nome } = props;

  return (
    <div className={styles.infoFuncionario}>
      <img src={fotoFuncionario} alt="foto funcionario" />
      <strong>{nome}</strong>
    </div>
  );
}

export { Funcionario };
