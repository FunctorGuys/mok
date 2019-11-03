import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from './../../actions/auth';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  let onToggle = false;
  const onHandleClick = e => {
    e.stopPropagation();
    e.preventDefault();
    const element = document.getElementsByClassName('nav-list active-h')[0];
    onToggle = !onToggle;
    if (onToggle === true) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  };
  return (
    <Fragment>
      <div className="header-wrap">
        {!loading && (
          <Fragment>
            {isAuthenticated ? (
              <div className="buttons">
                <Link className="btn_green" onClick={logout} to="/">
                  התנתק
                </Link>
              </div>
            ) : (
              <div className="buttons">
                <Link className="btn_white" to="/login">
                  התחברות
                </Link>
                <Link className="btn_green" to="/register">
                  הרשמה
                </Link>
              </div>
            )}
          </Fragment>
        )}

        <Link className="logo" to="/">
          <div>
            <p className="logo_text-1">M.o.K</p>
            <p className="logo_text-2">Market Of Knowledge</p>
          </div>
        </Link>
      </div>
      <nav className="menu-h">
        <Fragment>
          <Link className="toggle-nav" to="/" onClick={onHandleClick}>
            &#9776;
          </Link>
          <ul className="nav-list active-h">
            <li className="nav-item">
              {!loading && (
                <Fragment>
                  {isAuthenticated ? (
                    <NavLink
                      exact
                      className="nav-link"
                      activeClassName="nav-link-active"
                      to="/dashboard"
                    >
                      ראשי
                    </NavLink>
                  ) : (
                    <NavLink
                      exact
                      className="nav-link"
                      activeClassName="nav-link-active"
                      to="/"
                    >
                      ראשי
                    </NavLink>
                  )}
                </Fragment>
              )}
            </li>
            <li className="nav-item">
              <NavLink
                exact
                className="nav-link"
                activeClassName="nav-link-active"
                to="/#whatWeAreDoing"
              >
                מה אנחנו עושים?
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                className="nav-link"
                activeClassName="nav-link-active"
                to="/courses/by/free"
              >
                תרגילים בחינם
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                className="nav-link"
                activeClassName="nav-link-active"
                to="/contact"
              >
                יצירת קשר
              </NavLink>
            </li>
          </ul>
        </Fragment>
      </nav>
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);

// const authLinks = (
//   <ul>
//     <li>
//       <Link to="/courses">קורסים</Link>
//     </li>

//     <li>
//       <Link to="/dashboard">
//         <i className="fas fa-user" />{' '}
//         <span className="hide-sm">פאנל אישי</span>
//       </Link>
//     </li>
//     <li>
//       <a onClick={logout} href="/">
//         <i className="fas fa-sign-out-alt" />{' '}
//         <span className="hide-sm">התנתק</span>
//       </a>
//     </li>
//     <li>
//       <Link to="/contact">צור קשר</Link>
//     </li>
//   </ul>
// );

// const guestLinks = (
//   <ul>
//     <li>
//       <Link to="/courses">קורסים</Link>
//     </li>
//     <li>
//       <Link to="/contact">צור קשר</Link>
//     </li>
//     <li>
//       <Link to="/register">הרשמה</Link>
//     </li>
//     <li>
//       <Link to="/login">התחבר</Link>
//     </li>
//   </ul>
// );
