import React, { useState } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import './modalCreateNew.scss';

const ModalCreateNew = (props) => {
  const [playlistName, getPlaylistName ] = useState('');
  const {
    toggle,
    modal
  } = props;

  const handleChange = (e) => {
    getPlaylistName(e.target.value);
  }
  const addPlaylist = () => {
    console.log('getplaylistname',playlistName);
    getPlaylistName('');
    toggle();
  }

  return (
    <div className='createNewPlaylist'>
      <Modal isOpen={modal} toggle={toggle} className='createmodal'>
        <ModalBody>
            <div>
              <h4>Create Playlist</h4>
              <div className='margin17'>
                <input type='text' value={playlistName} onChange={(e) => {handleChange(e)}}/>
              </div>
              <div className='margin17'>
                <Button onClick={addPlaylist} >Create</Button>
              </div>
            </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalCreateNew;