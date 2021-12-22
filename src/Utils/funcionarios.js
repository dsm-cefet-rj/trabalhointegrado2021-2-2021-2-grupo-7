import Barbeiro1 from '../assets/barbeiro1.png';
import Barbeiro2 from '../assets/barbeiro2.png';
import Barbeiro3 from '../assets/barbeiro3.png';
import Barbeiro4 from '../assets/barbeiro4.jpg';
import Barbeiro5 from '../assets/barbeiro5.jpg';
import Barbeiro6 from '../assets/barbeiro6.png';

const barbeiros = [
  {
    id: 1,
    valor: 'Alan',
    disponivel: true,
    selecionado: false,
    especialidade: 'Especialidade: Barba',
    foto: Barbeiro1,
  },
  {
    id: 2,
    valor: 'César',
    disponivel: true,
    selecionado: true,
    especialidade: 'Especialidade: Cabelo',
    foto: Barbeiro2,
  },
  {
    id: 3,
    valor: 'Julio',
    disponivel: true,
    selecionado: false,
    especialidade: 'Especialidade: Barba',
    foto: Barbeiro3,
  },
  {
    id: 4,
    valor: 'Vitor',
    disponivel: false,
    selecionado: false,
    especialidade: 'Especialidade: Cabelo',
    foto: Barbeiro4,
  },
  {
    id: 5,
    valor: 'David',
    disponivel: false,
    selecionado: false,
    especialidade: 'Especialidade: Cabelo',
    foto: Barbeiro5,
  },
  {
    id: 6,
    valor: 'Lucas',
    disponivel: true,
    selecionado: false,
    especialidade: 'Especialidade: Barba',
    foto: Barbeiro6,
  },
];

export { barbeiros };
