import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './sidenavbar.css';
// import ItemSideNav from "./ItemSideNav";
import SubjectNav from './SubjectNav';

const SideNav = ({ links, courseId }) => {
  const closeSideMenu = () => {
    document.getElementById('side-menu').style.right = '-100%';
    // document.getElementById('main').style.marginRight = '0';
  };
  const openSideMenu = () => {
    document.getElementById('side-menu').style.right = '0px';
    // document.getElementById('main').style.marginRight = '250px';
  };

  return (
    <Fragment>
      <Link
        className="side-menu-toggle hoverable"
        to="#"
        onClick={openSideMenu}
      >
        תפריט <i className="fas fa-chevron-left" />
      </Link>
      <div id="side-menu" style={{ width: 400 }} className="side-nav">
        <Link to="#" className="btn-close hoverable" onClick={closeSideMenu}>
          &times;
        </Link>

        <div className="sidenav-inner">
          <TableOfItems
            links={links}
            courseId={courseId}
            closeSideMenu={closeSideMenu}
          />
        </div>
      </div>
    </Fragment>
  );
};

const getSubject = links => {
  const allSubject = links.map(l => {
    return l.subject;
  });
  let uniq = [...new Set(allSubject)];

  return uniq;
};
export class TableOfItems extends React.Component {
  render() {
    const { links, courseId, onHandleClick } = this.props;
    return (
      <div>
        {getSubject(links).map(s => {
          return (
            <Fragment key={s}>
              <Dropdown
                subject={s}
                courseId={courseId}
                links={links}
                onHandleClick={onHandleClick}
              />
            </Fragment>
          );
        })}
      </div>
    );
  }
}

class Dropdown extends React.Component {
  state = {
    open: false
  };
  toggleSubMenu = () => {
    this.setState({
      open: !this.state.open
    });
  };
  closeMenu = () => {
    if (window.location.pathname.includes('courses')) {
      document.getElementById('side-menu').style.right = '-100%';
    }
  };

  render() {
    const { subject, links, courseId, onHandleClick } = this.props;
    const { open } = this.state;
    return (
      <div
        style={{
          marginBottom: 10
        }}
      >
        <div
          className="button_dropdown"
          onClick={this.toggleSubMenu}
          style={{ borderRadius: 10, direction: 'ltr' }}
        >
          {subject}
          <span style={{ padding: '0px 10px', textAlign: 'center' }}>
            {open ? '-' : '+'}
          </span>
        </div>
        {console.log('closeMenu: ', this.closeMenu)}
        {console.log('onHandleClick: ', this.onHandleClick)}
        <SubjectNav
          style={{
            display: open ? 'block' : 'none'
          }}
          links={links}
          courseId={courseId}
          subject={subject}
          onHandleClick={onHandleClick}
          closeMenu={this.closeMenu}
        />
      </div>
    );
  }
}

export default SideNav;
