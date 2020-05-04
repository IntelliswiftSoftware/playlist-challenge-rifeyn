import React from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Breadcrumb } from 'reactstrap';
import classnames from 'classnames';

import PlaylistBreadcrumb from '../../containers/breadcrumb';
import Songlist from '../songList';
import GroupSongs from "../groupSongs";
import './home.scss';

import NewReleaseSongList from '../songList/NewReleaseSongList';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1'
    }
  }

  toggle = tab => {
    const {activeTab} = this.state;
    if(activeTab !== tab) this.setState({activeTab: tab});
  }
  render() {
    const {activeTab} = this.state;
    return (

        <div class="conent-box col-lg-12">
          <h2 class="heading">Home
              <span>Browse by categories below</span>
          </h2>

          <div class="tab-view">
            <section>
              <div>
                <Nav tabs justified>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '1' })}
                      onClick={() => { this.toggle('1'); }}
                    >
                      New Releases
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '2' })}
                      onClick={() => { this.toggle('2'); }}
                    >
                      Top Charts
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '3' })}
                      onClick={() => { this.toggle('3'); }}
                    >
                      Moods
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '4' })}
                      onClick={() => { this.toggle('4'); }}
                    >
                      Genre
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '5' })}
                      onClick={() => { this.toggle('5'); }}
                    >
                      Artists
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col sm="12">
                      { <PlaylistBreadcrumb items={['Home', 'New Release']} /> }
                      {<NewReleaseSongList />}
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col sm="12">
                      { <PlaylistBreadcrumb items={['Home', 'Top Charts']} /> }
                      {<Songlist />}
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="3">
                    <Row>
                      <Col sm="12">
                      { <PlaylistBreadcrumb items={['Home', 'Moods']} /> }
                      {<GroupSongs />}
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="4">
                    <Row>
                      <Col sm="12">
                      { <PlaylistBreadcrumb items={['Home', 'Genre']} /> }
                      {<GroupSongs />}
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="5">
                    <Row>
                      <Col sm="12">
                      { <PlaylistBreadcrumb items={['Home', 'Artists']} /> }
                      {<GroupSongs />}
                      </Col>
                    </Row>
                  </TabPane>                 
                </TabContent>
                </div>
            </section>
          </div>
        </div>
    );
  }
}
export default Home;