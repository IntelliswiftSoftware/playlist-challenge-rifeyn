import React from 'react';
import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className='headerbar'>
        <header class="justify-content-between fixed-top">
          <div class="logo-box col-8">
            <a class="navbar-brand" href="#">
              <img src="http://placehold.it/150x50?text=Logo" alt="" />
            </a>
              <div class="dropdown">
                {/* <!--Trigger--> */}
              <a type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false"><i class="fas fa-ellipsis-v"></i></a>
                {/* <!--Menu--> */}
              <div class="dropdown-menu dropdown-primary">
                  <a class="dropdown-item" href="#">Add To Playlist</a>
                  <a class="dropdown-item" href="#">Remove from Playlist</a>
                </div>
              </div>
              <div class="col-6" id="custom-search-input">
                <div class="input-group col-md-12">
                  <input type="text" class="  search-query form-control" placeholder="Search" />
                  <span class="input-group-btn">
                    <button class="btn btn-danger" type="button">
                      <span class=" glyphicon glyphicon-search"></span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div class="profile">
              <div>Hello Adam</div>
              <div class="dropdown dropleft">
                {/* <!--Trigger--> */}
              <a type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false"><i class="fas fa-caret-down"></i></a>
                {/* <!--Menu--> */}
              <div class="dropdown-menu dropdown-primary">
                  <a class="dropdown-item" href="#">Change Password</a>
                  <a class="dropdown-item" href="#">Settings</a>
                </div>
              </div>
              <div class="profile-thumb">
                <img src="images/profile.jpg" />
              </div>
            </div>
  </header>
  </div>
    )
  }
}
export default Header;