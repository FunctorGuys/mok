import React, { Fragment } from 'react';
import play_btn from './play_btn.jpg';
import fileImg from '../../img/file.png';
// import { Link } from 'react-router-dom';

const ItemSideNav = props => {
  return (
    <div>
      <Fragment>
        <div className="nav-flex">
          <div style={{ flexGrow: 1 }} />
          <div>{props.name}</div>
          <div className="nav_play">
            {props.type === 'video' ? (
              <img src={play_btn} />
            ) : (
              <img src={fileImg} />
            )}
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default ItemSideNav;
