import styles from './styles.module.css';

function Servico(props) {
  const { servico } = props;
  const { imagem, nome } = servico;

  return (
    <div className={styles.infoServico}>
      <img src={imagem} alt={nome} />
      <strong>{nome}</strong>
    </div>
  );
}

export { Servico };
