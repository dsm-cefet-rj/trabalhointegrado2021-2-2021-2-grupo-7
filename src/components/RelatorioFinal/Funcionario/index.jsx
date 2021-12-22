import fotoFuncionario from '../../../assets/barbeiro2.png';

import styles from './styles.module.css';

function Funcionario(props) {
  const { nome, especialidade } = props;


  return (
    <div className={styles.infoFuncionario}>
      <img src={fotoFuncionario} alt="foto funcionario" />
      <strong>{nome}</strong>
      <strong>{especialidade}</strong>
    </div>
  );
}

export { Funcionario };
