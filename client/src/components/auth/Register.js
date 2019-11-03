import React, { Fragment, useState } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import tick from '../../img/tick.png';

const Register = ({ setAlert, register, isAuthenticated, history }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    check: '',
    phone: ''
  });

  const { name, email, password, password2, check, phone } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    let isNum = /^\d+$/.test(phone);
    console.log('isNum', isNum);
    if (password !== password2) {
      setAlert('הסיסמאות לא זהות', 'danger');
    } else if (phone.length != 10) {
      setAlert('מספר הנייד צריך להכיל 10 ספרות', 'danger');
    } else if (!isNum) {
      setAlert('מספר הנייד צריך להכיל ספרות בלבד', 'danger');
    } else {
      register({
        name,
        email,
        password,
        phone,
        history
      });
      return <Redirect to="/login" />;
    }
  };

  return (
    <section className="sign_up">
      <h2>פתרונות במתמטיקה</h2>
      <h3>פשוט, קל ומיידי</h3>
      <div className="sign_up-content">
        <div className="sign_up-right">
          <h2>הרשמה בחינם</h2>

          <form onSubmit={e => onSubmit(e)}>
            <div className="row-1">
              <input
                type="text"
                placeholder="שם מלא"
                name="name"
                value={name}
                onChange={e => onChange(e)}
                maxLength="25"
                required
              />
            </div>
            <div className="row-1">
              <input
                type="email"
                placeholder="כתובת דואר אלקטרוני"
                name="email"
                value={email}
                onChange={e => onChange(e)}
                required
              />
            </div>
            <div className="row-1">
              <input
                type="text"
                placeholder="מספר נייד"
                name="phone"
                value={phone}
                onChange={e => onChange(e)}
                required
              />
            </div>
            <div className="row-1">
              <input
                type="password"
                placeholder="סיסמה"
                name="password"
                value={password}
                onChange={e => onChange(e)}
                minLength="6"
                maxLength="20"
              />
            </div>
            <div className="row-1">
              <input
                type="password"
                placeholder="אימות סיסמה"
                name="password2"
                value={password2}
                onChange={e => onChange(e)}
                minLength="6"
                maxLength="20"
                required
              />
            </div>

            <div className="row-right">
              <p>
                אני מקבל את{' '}
                <Link
                  to="/policy"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  תנאי השימוש
                </Link>
              </p>
              &nbsp;&nbsp;
              <input
                type="checkbox"
                name="check"
                onChange={e => onChange(e)}
                required
              />
            </div>
            <div className="button">
              <button type="submit" className="btn-submit">
                הרשמה
              </button>
              {/* <input type="submit" className="btn-submit" value="הרשמה" /> */}
            </div>
            <div className="login">
              <Link className="form-btn" to="/login">
                התחברות
              </Link>
              &nbsp;&nbsp;
              <p>כבר יש לכם חשבון?</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

Register.protoTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(withRouter(Register));
