import React from "react";
import createNewImg from '../../images/ic_library_add_24px@2x.png';
import bollyWoodSong from '../../images/Play5_med.png';
import ilove90s from '../../images/play7_high.png';

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Breadcrumb } from 'reactstrap';
import classnames from 'classnames';

import PlaylistBreadcrumb from '../../containers/breadcrumb';
import GroupSongs from "../groupSongs";


function PlayList(props) {
  const list = [{
    id:1,
    name: 'Create New',
    image: {
      "low": createNewImg,
      "mid": createNewImg,
      "high": createNewImg,
    },
    },
    {
      id:1,
      name: 'BollyWood',
      image: {
        "low": bollyWoodSong,
        "mid": bollyWoodSong,
        "high": bollyWoodSong,
      },
      },
      {
        id:1,
        name: "90's",
        image: {
          "low": ilove90s,
          "mid": ilove90s,
          "high": ilove90s
        },
      }]
  
  return (
    <div class="conent-box col-lg-12">
      <h1 class="heading">Playlist Library
          <span>Browse by categories below</span>
      </h1>

      <div class="tab-view">
        <section>
          <div>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: true })}
                  onClick={() => { this.toggle('1'); }}
                >
                  Your Playlists
                    </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={'1'}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                  { <PlaylistBreadcrumb items={['Playlist Library', 'Your Playlist']} /> }
                  {<GroupSongs list={list}/>}
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
export default PlayList;