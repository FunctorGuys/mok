import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Line = () => {
  return (
    <Fragment>
      <ul className="menu">
        <li>
          <NavLink
            exact
            className="menu-btn"
            activeClassName="current"
            to="/courses/by/school"
          >
            בית ספר
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            className="menu-btn"
            activeClassName="current"
            to="/courses/by/pre"
          >
            מכינה
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            className="menu-btn"
            activeClassName="current"
            to="/courses/by/ironih"
          >
            עירוני ה'
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            className="menu-btn"
            activeClassName="current"
            to="/courses/by/reali"
          >
            {' '}
            ריאלי
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            className="menu-btn"
            activeClassName="current"
            to="/courses/by/erez"
          >
            {' '}
            ארז
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            className="menu-btn"
            activeClassName="current"
            to="/courses/by/free"
          >
            {' '}
            חינם
          </NavLink>
        </li>
      </ul>
      <div className="line" />
    </Fragment>
  );
};

export default Line;
