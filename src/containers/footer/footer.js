import React from "react";
import './footer.scss';
import crop from '../../images/crop.jpg';
import icShare from '../../images/ic_share_24px@2x-01.svg';
import group from '../../images/Group 107@2x-01.svg';
import icShuffle from '../../images/ic_shuffle_24px@2x-01.svg';
import icRepeat from '../../images/ic_repeat_24px@2x-01.svg';
import icVolumeOff from '../../images/ic_volume_off_24px@2x.svg';
import icVolumeDown from '../../images/ic_volume_down_24px@2x.svg';
import icVolumeUp from '../../images/ic_volume_up_24px@2x-01.svg';
import icSkipNext1 from '../../images/ic_skip_next_-1@2x.svg';
import icPlayCircleOutLine from '../../images/ic_play_circle_outline_24px@2x-01.svg';
import icSkipNext24 from '../../images/ic_skip_next_24px@2x.svg';



function Footer(props) {

  return (
    <div class="playerbox">
      <div class="progressholder mobileonly">
        <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
            aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: '45%'}} ></div>
        </div>
      </div>
      <div class="mediainfo col-3">
        <div class="list no-gutters">
          <div class="thumbnail"><img src={crop} /></div>
          <div class="title col-6">
            <h3>Stairway to heaven<span>Baadshah</span></h3>
          </div>
          <div class="actions col-3">
            <div class="fav active"><i class="fas fa-heart"></i></div>
            <div class="share"><img src={icShare} /></div>
            <div class="group"><img src={group} /></div>
          </div>
        </div>
      </div>
      <div class="player col-6">
        <div class="playbuttons no-gutters">
          <div class=" currenttime">01.06</div>
          <div class="playpause">
            <a><img src={icSkipNext1} /></a>
            <a><img src={icPlayCircleOutLine} /></a>
            <a><img src={icSkipNext24} /></a>
          </div>
          <div class="endtime">03.06</div>
        </div>
        <div class="desktoponly">
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
              aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '75%'}}></div>
          </div>
        </div>
      </div>
      <div class="controls col-3">
        <ul class="controls-list">
          <li><a><img src={icShuffle} /></a></li>
          <li><a><img src={icRepeat} /></a></li>
          <li class="volume-off"><a><img src={icVolumeOff} /></a></li>
          <li class="volume-down"><a><img src={icVolumeDown} /></a></li>
          <li class="volume-level"><a> <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
              aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: '45%'}}></div>
          </div></a></li>
          <li class="volume-up"><a><img src={icVolumeUp} /></a></li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;