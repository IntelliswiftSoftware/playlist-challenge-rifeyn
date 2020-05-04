import React from 'react';

import './groupSongs.scss';
import ModalCreateNew from '../../containers/modalCreateNew';

class GroupSongs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    }
  }

  handleClick = (item) => {
    console.log('handle item',item)
  }

  createNewPlayList = (item) => {
    const { openModal } = this.state
    this.setState({openModal: !openModal });
  }

  render () {
    return (
      <>
      <div class="boxview">
        {(this.props.list || []).map((item,index) => (
          item.name === 'Create New' ?
          <div class="box" onClick={() => this.createNewPlayList(item)}>
              <div style={{height: '65%', width: '75%', background: '#121212', borderRadius: '18px'}}>
              <img src={item.image.low} style={{margin:'17px'}}/>
              </div>
            <p class="title">{item.name}</p>
          </div>
          :
          <div class="box" onClick={() => this.handleClick(item)}>
            <img src={item.image.low} />
            <p class="title">{item.name}</p>
          </div>
        ))}
      </div>
      <ModalCreateNew modal={this.state.openModal} toggle={this.createNewPlayList} />
      </>
    );
  }
}

export default GroupSongs;