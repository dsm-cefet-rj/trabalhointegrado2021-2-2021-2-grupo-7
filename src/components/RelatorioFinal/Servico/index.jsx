import styles from './styles.module.css';

function Servico(props) {
  const { imagem, nome } = props;

  return (
    <div class={styles.infoServico}>
      <img src={imagem} alt="tesoura" />
      <strong>{nome}</strong>
    </div>
  );
}

export { Servico };
