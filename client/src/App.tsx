import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import IconButton from './components/IconButton';
import Modal from './components/Modal';
import Searchbar from './components/Searchbar';
import './styles/global.css'

function App() {
  const [modal, setModal] = useState(false)

  const openFileDialog = () => {
    const inputElement = document.createElement('input')
    inputElement.type = 'file'
    inputElement.onchange = () => {
      console.log(inputElement.files)
    }
    inputElement.click()
  }

  useEffect(() => {
    // this is for modal
    window.onclick = (e: any) => {
      if(e.target.id === 'closer')
        setModal(false)
    }

    // cleanup
    return () => {
      window.onclick = null
    }
  })

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
            <label onClick={openFileDialog} htmlFor="filename">filename: </label>
            <input type="text" name="filename" id="filename" />
            <br/>
            {/*
              maybe create name randomization with redirection?
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
