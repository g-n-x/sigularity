import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import IconButton from './components/IconButton';
import Modal from './components/Modal';
import Searchbar from './components/Searchbar';
import './styles/global.css'

function App() {
  // this is for modal
  window.onclick = (e: any) => {
    if(e.target.id === 'closer') {
      console.log(modal)
      setModal(false)
    }
  }

  useEffect(() => {
    // cleanup
    return () => {
      window.onclick = null
    }
  })

  const [modal, setModal] = useState(false)
  return (
    <div>
      <div className="actions">
        <Searchbar />
        <IconButton onClick={()=> setModal(true)} icon={faPlus}/>
      </div>
      <div className="cardArea">
      </div>
      {modal && <Modal>
        <p>it works</p>
      </Modal>}
    </div>
  );
}

export default App;
