import Barbeiro1 from '../assets/barbeiro1.png';
import Barbeiro2 from '../assets/barbeiro2.png';
import Barbeiro3 from '../assets/barbeiro3.png';
import Barbeiro4 from '../assets/barbeiro4.jpg';
import Barbeiro5 from '../assets/barbeiro5.jpg';
import Barbeiro6 from '../assets/barbeiro6.png';

const barbeiros = [
  {
    valor: 'Alan',
    disponivel: true,
    selecionado: false,
    especialidade: 'Especialidade: Barba',
    foto: Barbeiro1,
  },
  {
    valor: 'César',
    disponivel: true,
    selecionado: true,
    especialidade: 'Especialidade: Cabelo',
    foto: Barbeiro2,  
  },
  {
    valor: 'Julio',
    disponivel: true,
    selecionado: false,
    especialidade: 'Especialidade: Barba',
    foto: Barbeiro3,
  },
  {
    valor: 'Vitor',
    disponivel: false,
    selecionado: false,
    especialidade: 'Especialidade: Cabelo',
    foto: Barbeiro4,
  },
  {
    valor: 'David',
    disponivel: false,
    selecionado: false,
    especialidade: 'Especialidade: Cabelo',
    foto: Barbeiro5,
  },
  {
    valor: 'Lucas',
    disponivel: true,
    selecionado: false,
    especialidade: 'Especialidade: Barba',
    foto: Barbeiro6,
  },
];

export { barbeiros };
