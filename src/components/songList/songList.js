import React, { useState } from 'react';
import './songList.scss';
import FavoriteIcon from '@material-ui/icons/Favorite';
import QueueIcon from '@material-ui/icons/Queue';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const SongList = (props) =>  {
  
  const [dropdownOpen, setDropdownOpen] = useState([]);

  const toggle = (id) => {
    let dropdownvalue = [];
    dropdownvalue[id] = !dropdownOpen[id];
    console.log('id',id)
    setDropdownOpen(dropdownvalue);
  }

  console.log('graphql song list', props.list);

    const songslist = {
      data: {
        "user": {
          "id": "1",
          "firstname": "Tom",
          "lastname": "Hanks",
          "gender": "Male",
          "image": {
            "low": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg",
            "mid": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg",
            "high": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg",
            "id": "1"
          },
          playlists: [
            {
              songs: [
                {
                  "id": "1",
                  image: {
                    "low": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg",
                    "mid": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg",
                    "high": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg"
                  },
                  artist: {
                    firstname: "Lata",
                    "lastname": "Mangeshkar",
                    "gender": "female",
                    "image": {
                      "low": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg",
                      "mid": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg"
                    }
                  }
                },
                {
                  "id": "2",
                  "image": {
                    "low": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg",
                    "mid": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg",
                    "high": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg"
                  },
                  "artist": {
                    "firstname": "Lata",
                    "lastname": "Mangeshkar",
                    "gender": "female",
                    "image": {
                      "low": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg",
                      "mid": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg"
                    }
                  }
                },
                {
                  "id": "3",
                  "image": {
                    "low": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg",
                    "mid": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg",
                    "high": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg"
                  },
                  "artist": {
                    "firstname": "Lata",
                    "lastname": "Mangeshkar",
                    "gender": "female",
                    "image": {
                      "low": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg",
                      "mid": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg"
                    }
                  }
                },
                {
                  "id": "4",
                  "image": {
                    "low": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg",
                    "mid": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg",
                    "high": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg"
                  },
                  "artist": {
                    "firstname": "Lata",
                    "lastname": "Mangeshkar",
                    "gender": "female",
                    "image": {
                      "low": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg",
                      "mid": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg"
                    }
                  }
                },
                {
                  "id": "5",
                  "image": {
                    "low": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg",
                    "mid": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg",
                    "high": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg"
                  },
                  "artist": {
                    "firstname": "Lata",
                    "lastname": "Mangeshkar",
                    "gender": "female",
                    "image": {
                      "low": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg",
                      "mid": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg"
                    }
                  }
                },
                {
                  "id": "6",
                  "image": {
                    "low": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg",
                    "mid": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg",
                    "high": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg"
                  },
                  "artist": {
                    "firstname": "Lata",
                    "lastname": "Mangeshkar",
                    "gender": "female",
                    "image": {
                      "low": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg",
                      "mid": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg"
                    }
                  }
                },
                {
                  "id": "7",
                  "image": {
                    "low": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg",
                    "mid": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg",
                    "high": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg"
                  },
                  "artist": {
                    "firstname": "Lata",
                    "lastname": "Mangeshkar",
                    "gender": "female",
                    "image": {
                      "low": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg",
                      "mid": "http://getwallpapers.com/wallpaper/full/c/c/6/1457223-beautiful-song-wallpapers-1920x1080-windows-xp.jpg"
                    }
                  }
                }
              ]
            }
          ]
        }
      }
    }
    console.log('songlist', songslist);
    console.log('dropdown', dropdownOpen);
    return (
      <div class="listview" >
        {songslist.data.user.playlists[0].songs.map((item, index) => (
          <div class="list no-gutters">
            <div class="thumbnail"><img src={item.image.low} /></div>
            <div class="title col-5">
              <h3>Stairway to heaven<span>{item.artist.firstname}</span></h3>
            </div>
            <div class="tracktime col-2">10.00</div>
            <div class="actions col-3">
              <div class="fav active">
                <FavoriteIcon style={{ color: '#ffffff' }} />
                {/* <i class="fa fa-heart"></i> */}
              </div>
              <div class="add">
                <QueueIcon style={{ color: '#ffffff' }} />
              </div>
              <div class="dropdown dropleft">
                {/* <!--Trigger--> */}
                {/* <a type="button" id="dropdownMenu2" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false"> */}
                  <MoreVertIcon style={{ color: '#ffffff' }} onClick={() => toggle(item.id)}/>
                  {/* <i
                      class="fas fa-ellipsis-v"></i> */}
                {/* </a> */}
                {/* <!--Menu--> */}
                <div class={`dropdown-menu dropdown-primary${dropdownOpen[item.id] ? ' show' : ''}`}>
                  <a class="dropdown-item" href="#">Add To Playlist</a>
                  <a class="dropdown-item" href="#">Remove from Playlist</a>
                </div>
              </div>
            </div>
          </div>))
        }
      </div>
    );
}

export default SongList;