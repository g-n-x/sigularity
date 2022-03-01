import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React, { useCallback, useEffect, useState } from 'react';
import IconButton from './components/IconButton';
import Modal from './components/Modal';
import Searchbar from './components/Searchbar';
import api from './services/api';
import './styles/global.css'

interface Content {
  id: number
  filePath: string
  fileUrl: string
  createdAt: Date
  updatedAt: Date
}

function App() {
  const [modal, setModal] = useState(false)
  const [fileList, setFileList] = useState<FileList>()
  const [contents, setContents] = useState<Content[]>()

  const uploadFile = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', fileList![0])

    await api.post('/file', formData)

    setFileList(undefined)
  }, [fileList])

  const loadContent = useCallback(async () => {
    const r = await api.get('/content')
    setContents(r.data)
  }, [])

  useEffect(() => {
    // get all content
    loadContent()
    
    // this is for modal
    window.onclick = (e: any) => {
      if(e.target.id === 'closer')
        setModal(false)
    }

    // cleanup
    return () => {
      window.onclick = null
    }
  }, [])

  return (
    <div>
      <div className="actions">
        <Searchbar />
        <IconButton onClick={()=> setModal(true)} icon={faPlus}/>
      </div>
      <div className="cardArea">
        {
          contents &&
          contents.map(c =>
            <div style={{backgroundColor: 'white'}}>
            <h1>{c.filePath}</h1>
            <img width={600} src={'http://localhost:8988/api/content/'+c.fileUrl} />
            </div>
          )
        }
      </div>
      { modal &&
        <Modal>
          <form onSubmit={uploadFile}>
            <label htmlFor="filename">filename: </label>
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
            <input
              type="file"
              name="file"
              id="file"
              onChange={(e) => setFileList(e.target.files!)}
            />
            <br/>
            <br/>
            <button type="submit">upload</button>
          </form>
        </Modal>
      }
    </div>
  );
}

export default App;
