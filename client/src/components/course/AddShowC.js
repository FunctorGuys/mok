import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from './../../actions/alert';
import PropTypes from 'prop-types';
import { addShowC } from '../../actions/course';

const AddShowC = ({ setAlert, addShowC }) => {
  const [formData, setFormData] = useState({
    school: '',
    idB: '',
    nameC: '',
    indexLink: '',
    imgC: ''
  });

  const { school, idB, nameC, indexLink, imgC } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    addShowC({ school, idB, nameC, indexLink, imgC });
  };

  return (
    <Fragment>
      <div className="sign_up-content">
        <div className="sign_up-right">
          <h2>C צור קורס</h2>
          <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="row-1">
              <input
                type="text"
                placeholder=" A קוד הקורס"
                name="school"
                value={school}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="row-1">
              <input
                type="text"
                placeholder=" B קוד הקורס"
                name="idB"
                value={idB}
                onChange={e => onChange(e)}
              />
            </div>

            <div className="row-1">
              <input
                type="text"
                placeholder="שם הקורס C"
                name="nameC"
                value={nameC}
                onChange={e => onChange(e)}
              />
            </div>

            <div className="row-1">
              <input
                type="text"
                placeholder="מיקום"
                name="indexLink"
                value={indexLink}
                onChange={e => onChange(e)}
              />
            </div>

            <div className="row-1">
              <input
                type="text"
                placeholder=" C תמונת הקורס"
                name="imgC"
                value={imgC}
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

AddShowC.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addShowC: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlert, addShowC }
)(AddShowC);
