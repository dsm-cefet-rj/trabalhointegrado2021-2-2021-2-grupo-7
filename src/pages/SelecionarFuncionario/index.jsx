import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';

import rightArrowIcon from '../../assets/right-arrow.svg';

import { barbeiros, barbeiros as utilFunc } from '../../Utils/funcionarios';

import styles from './styles.module.css';

//import imgBarbeiro from '../../assets/barbeiroVector.png';

function SelecionarFuncionario() {
  const [barbeiros, setFunc] = useState(utilFunc);

  const navigate = useNavigate();

  function handleBotaoProximaTela() {
    navigate(`/selecionar-servico`);
  }

  const handleClick = () => {
  }

return (
    <div className="content">
      <Header />

      <main className={styles.principalfunc}>
        <form onSubmit={handleBotaoProximaTela}>
          <h2>Selecione o Barbeiro desejado:</h2>
          <div className={styles.funcionarios}>
            {barbeiros.map(func => (
              <button onClick={handleClick}
                type="button"
                className={ 
                  styles.func + 
                  (func.selecionado
                  ? ' ' + styles.selecionado
                  : func.disponivel
                  ? ' ' + styles.disponivel
                  : '')
                }

                disabled={!func.disponivel}
              >
                <p>{func.valor}</p>    
              
                <img src={func.foto} alt="Barbeiro" className={styles.img}/>

                <h3>{func.especialidade}</h3>  
              </button>
            ))}
          </div>

          <button type="submit">           
            <img src={rightArrowIcon} alt="seta" className={styles.icone} />
            Proximo
          </button>
        </form>
      </main>
    </div>
  );
}

export { SelecionarFuncionario };
