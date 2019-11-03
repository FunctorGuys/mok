import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { updatePass } from '../../actions/auth';
import PropTypes from 'prop-types';

const NewPass = ({ setAlert, updatePass, isAuthenticated, history, match }) => {
  const [formData, setFormData] = useState({
    password: '',
    password2: ''
  });

  const { password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('הסיסמאות לא זהות', 'danger');
    } else {
      updatePass(password, match.params.token, history);
    }
  };

  return (
    <Fragment>
      <section className="sign_up">
        <h2>שינוי סיסמא</h2>
        <div className="sign_up-content">
          <div className="sign_up-right">
            <h3>הזן את הסיסמה החדשה שלך</h3>
            <form className="form" onSubmit={e => onSubmit(e)}>
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
                  placeholder="סיסמה לאימות"
                  name="password2"
                  value={password2}
                  onChange={e => onChange(e)}
                  minLength="6"
                  maxLength="20"
                />
              </div>
              <div className="button">
                <button type="submit" className="btn-submit">
                  החלף
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

NewPass.protoTypes = {
  setAlert: PropTypes.func.isRequired,
  updatePass: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, updatePass }
)(withRouter(NewPass));
