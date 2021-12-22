import styles from './styles.module.css';

function Funcionario(props) {
  const { funcionario } = props;
  const { nome, especialidade, foto } = funcionario;

  return (
    <div className={styles.infoFuncionario}>
      <img src={foto} alt="foto funcionario" />
      <strong>{nome}</strong>
      <strong>{especialidade}</strong>
    </div>
  );
}

export { Funcionario };
