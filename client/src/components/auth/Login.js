import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [fromData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password, ip } = fromData;

  const onChange = e =>
    setFormData({ ...fromData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="sign_up">
      <h2>פתרונות במתמטיקה</h2>
      <h3>פשוט, קל ומיידי</h3>
      <div className="sign_up-content">
        <div className="sign_up-right">
          <h2>התחברות</h2>
          <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="row-1">
              <input
                type="email"
                placeholder="דואר אלקטרוני"
                name="email"
                value={email}
                onChange={e => onChange(e)}
                maxLength="30"
                required
              />
            </div>
            <div className="row-1">
              <input
                type="password"
                placeholder="סיסמה"
                name="password"
                minLength="6"
                maxLength="20"
                value={password}
                onChange={e => onChange(e)}
                required
              />
            </div>
            <div className="button">
              <button type="submit" className="btn-submit">
                התחברות
              </button>
            </div>
            <div className="login">
              <p>
                <Link className="form-btn" to="/recovery">
                  שכחתי את הסיסמה
                </Link>
              </p>
            </div>
            <div className="login">
              <p>
                <Link className="forget-btn" to="/register">
                  עדיין אין לכם חשבון? הירשמו עכשיו!
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  isAdmin: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isAdmin: state.auth.isAdmin
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
