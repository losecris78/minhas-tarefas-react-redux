import ListaDeTarefas from '../../containers/ListaDeTarefas'
import BarraLateral from '../../containers/BarraLateral'
import BotaoAdicionar from '../../components/BotaoAdicionar'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)
export default Home
