import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from './../../actions/alert';
import PropTypes from 'prop-types';
import { addShowA } from '../../actions/course';

const AddShowA = ({ setAlert, addShowA }) => {
  const [formData, setFormData] = useState({
    nameOfCourseA: '',
    titleA: ''
  });

  const { nameOfCourseA, titleA } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    addShowA({ nameOfCourseA, titleA });
  };

  return (
    <Fragment>
      <div className="sign_up-content">
        <div className="sign_up-right">
          <h2>A צור קורס</h2>
          <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="row-1">
              <input
                type="text"
                placeholder="קוד הקורס"
                name="nameOfCourseA"
                value={nameOfCourseA}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="row-1">
              <input
                type="text"
                placeholder="שם הקורס"
                name="titleA"
                value={titleA}
                onChange={e => onChange(e)}
              />
            </div>

            <div className="button">
              <button type="submit" className="btn-submit">
                הוסף
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

AddShowA.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addShowA: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlert, addShowA }
)(AddShowA);
