import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import IconButton from './components/IconButton';
import Modal from './components/Modal';
import Searchbar from './components/Searchbar';
import './styles/global.css'

function App() {
  useEffect(() => {
    // this is for modal
    window.onclick = (e: any) => {
      if(e.target.id === 'closer') {
        console.log(modal)
        setModal(false)
      }
    }

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
      { modal &&
        <Modal>
          <form>
            <label htmlFor="filename">filename: </label>
            <input type="text" name="filename" id="filename" />
            <br/>
            {/*
              maybe create name randomization with redireciton?
              there will be one link, with expiration
              but each time the link is clicked, the user is redirected
              to somewhere else
             */}
            <label htmlFor="randomizename">randomization </label>
            <input type="checkbox" name="randomizename" id="randomizename" />
            <br/>
            <label htmlFor="file">file: </label>
            <input type="file" name="file" id="file" />
          </form>
        </Modal>
      }
    </div>
  );
}

export default App;
