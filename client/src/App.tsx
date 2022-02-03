import { faPlus } from '@fortawesome/free-solid-svg-icons'
import IconButton from './components/IconButton';
import Searchbar from './components/Searchbar';
import './styles/global.css'

function App() {
  return (
    <div>
      <div className="actions">
        <Searchbar />
        <IconButton icon={faPlus}/>
      </div>
      <div className="cardArea">
      </div>
    </div>
  );
}

export default App;
