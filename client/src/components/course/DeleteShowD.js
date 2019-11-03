import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from './../../actions/alert';
import PropTypes from 'prop-types';
import { deleteShowD } from '../../actions/course';

const DeleteShowD = ({ setAlert, deleteShowD }) => {
  const [formData, setFormData] = useState({
    idA: '',
    idB: '',
    idC: '',
    idD: ''
  });

  const { idA, idB, idC, idD } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    deleteShowD(idA, idB, idC, idD);
  };

  return (
    <Fragment>
      <div className="sign_up-content">
        <div className="sign_up-right">
          <h2>D מחק קורס</h2>
          <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="row-1">
              <input
                type="text"
                placeholder=" A קוד הקורס"
                name="idA"
                value={idA}
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
                placeholder=" C קוד הקורס"
                name="idC"
                value={idC}
                onChange={e => onChange(e)}
              />
            </div>

            <div className="row-1">
              <input
                type="text"
                placeholder=" D קוד הקורס"
                name="idD"
                value={idD}
                onChange={e => onChange(e)}
              />
            </div>

            <div className="button">
              <button type="submit" className="btn-submit">
                מחק
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

DeleteShowD.propTypes = {
  setAlert: PropTypes.func.isRequired,
  deleteShowD: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlert, deleteShowD }
)(DeleteShowD);
