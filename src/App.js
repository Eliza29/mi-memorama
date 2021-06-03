import ListCards from './components/ListCards'
import {Header} from './styles/styleCards'

const App = () => {

  return (  
    <div>
      <Header>
        <h1>Juego de Memoria</h1>
      </Header>
      <ListCards />
    </div>
  );
}
 
export default App;
