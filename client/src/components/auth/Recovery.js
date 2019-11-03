import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { recovery } from '../../actions/auth';

const Recovery = ({ recovery, isAuthenticated, history }) => {
  const [fromData, setFormData] = useState({
    email: ''
  });

  const { email } = fromData;

  const onChange = e =>
    setFormData({ ...fromData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    recovery({ email, history });
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <section className="sign_up">
        <h2>איפוס סיסמא</h2>
        <h3>אנא כתבו את כתובת המייל שלכם כפי שקיימת במערכת</h3>
        <div className="sign_up-content">
          <div className="sign_up-right">
            <form className="form" onSubmit={e => onSubmit(e)}>
              <div className="row-1">
                <input
                  type="email"
                  placeholder="איימיל"
                  name="email"
                  value={email}
                  onChange={e => onChange(e)}
                  required
                />
              </div>

              <div className="button">
                <button type="submit" className="btn-submit">
                  שלח
                </button>
              </div>
            </form>
            <div className="login">
              <p>
                אין לך משתמש?
                <Link class="form-btn" to="/register">
                  הירשם
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Recovery.propTypes = {
  recovery: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { recovery }
)(withRouter(Recovery));
