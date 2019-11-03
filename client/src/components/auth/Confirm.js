import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { confirmEmail } from '../../actions/auth';
import PropTypes from 'prop-types';

const Confirm = ({ confirmEmail, match, history }) => {
  useEffect(() => {
    confirmEmail(match.params.token);
  }, [confirmEmail]);

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push('/login');
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="confirmMail">
      <p>החשבון אומת בהצלחה</p>
    </div>
  );
};

Confirm.propTypes = {
  confiremEmail: PropTypes.func.isRequired
};

export default connect(
  null,
  { confirmEmail }
)(withRouter(Confirm));
