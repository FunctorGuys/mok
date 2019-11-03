import React, { Fragment } from 'react';
import '../layout/sidenavbar.css';
// import ItemSideNav from "./ItemSideNav";
import ShowSubjectNav from './ShowSubjectNav';
import useToggle from '../../hooks/useToggle';

const ShowSideNav = ({ links, school, idB, idC, idD }) => {
  const [isOpenSideNav, toggleisOpenSideNav] = useToggle(false);

  return (
    <Fragment>
      <div className="side-menu-toggle hoverable" onClick={toggleisOpenSideNav}>
        תפריט <i className="fas fa-chevron-left" />
      </div>
      <div
        id="side-menu"
        style={{ right: isOpenSideNav ? '0' : '-100%' }}
        className="side-nav"
      >
        <div className="btn-close hoverable" onClick={toggleisOpenSideNav}>
          &times;
        </div>

        <div className="sidenav-inner">
          <TableOfItems
            links={links}
            school={school}
            idB={idB}
            idC={idC}
            idD={idD}
            closeSideMenu={toggleisOpenSideNav}
            toggleisOpenSideNav={toggleisOpenSideNav}
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
    const {
      links,
      school,
      idB,
      idC,
      idD,
      onHandleClick,
      toggleisOpenSideNav
    } = this.props;

    return (
      <div>
        {getSubject(links).map(s => {
          return (
            <Fragment key={s}>
              <Dropdown
                subject={s}
                school={school}
                idB={idB}
                idC={idC}
                idD={idD}
                links={links}
                onHandleClick={onHandleClick}
                toggleisOpenSideNav={toggleisOpenSideNav}
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
    if (window.location.pathname.includes('showcases')) {
      this.props.toggleisOpenSideNav();
    }
  };

  render() {
    const { subject, links, school, idB, idC, idD, onHandleClick } = this.props;

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

        <ShowSubjectNav
          style={{
            display: open ? 'block' : 'none'
          }}
          links={links}
          school={school}
          idB={idB}
          idC={idC}
          idD={idD}
          subject={subject}
          onHandleClick={onHandleClick}
          closeMenu={this.closeMenu}
        />
      </div>
    );
  }
}

export default ShowSideNav;
