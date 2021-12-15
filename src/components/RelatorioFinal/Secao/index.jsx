import styles from './styles.module.css';

function Secao(props) {
  const { titulo, children } = props;

  return (
    <fieldset className={styles.secao}>
      <legend>{titulo}</legend>
      {children}
    </fieldset>
  );
}

export { Secao };
