import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AdminDashboardAction from './AdminDashboardAction';

const AdminDashboard = ({ auth: { user } }) => {
  return (
    <Fragment>
      <h1 className="large text-primary">פאנל ניהול</h1>
      <p className="lead">
        <i className="fas fa-user" /> ברוך הבא {user && user.name}
      </p>
      <AdminDashboardAction />
    </Fragment>
  );
};

AdminDashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(AdminDashboard);
