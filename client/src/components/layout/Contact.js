import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from './../../actions/alert';
import PropTypes from 'prop-types';
import { contact } from '../../actions/contact';
import { Link, withRouter } from 'react-router-dom';

const Contact = ({ setAlert, contact, history }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bText: ''
  });

  const { name, email, bText } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    contact(name, email, bText, history);
  };

  return (
    <section className="sign_up">
      <div className="sign_up-content">
        <div className="sign_up-right">
          <h3>צור קשר </h3>

          <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="row-1">
              <input
                type="text"
                placeholder="שם מלא"
                name="name"
                value={name}
                onChange={e => onChange(e)}
                required
              />
            </div>
            <div className="row-1">
              <input
                type="email"
                placeholder="כתובת מייל"
                name="email"
                value={email}
                onChange={e => onChange(e)}
                required
              />
            </div>
            <div className="row-1">
              <textarea
                name="bText"
                cols="30"
                rows="5"
                placeholder="גוף ההודעה"
                value={bText}
                onChange={e => onChange(e)}
                required
              />
            </div>
            <div className="login">
              <button type="submit" className="btn-submit">
                שלח
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  setAlert: PropTypes.func.isRequired,
  contact: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlert, contact }
)(withRouter(Contact));
