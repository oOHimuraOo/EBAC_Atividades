import Projeto from '../../components/Projeto'
import Titulo from '../../components/Title'
import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      <li>
        <Projeto></Projeto>
      </li>
      <li>
        <Projeto></Projeto>
      </li>
      <li>
        <Projeto></Projeto>
      </li>
      <li>
        <Projeto></Projeto>
      </li>
    </Lista>
  </section>
)

export default Projetos