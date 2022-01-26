import styles from './styles.module.css';

function Cliente(props) {
  const { cliente } = props;
  const { imagem, nome } = cliente;

  return (
    <div className={styles.infoCliente}>
      <img src={imagem} alt={nome} />
      <strong>{nome}</strong>
    </div>
  );
}

export { Cliente };