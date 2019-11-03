import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from './../../actions/alert';
import PropTypes from 'prop-types';
import { deleteShowB } from '../../actions/course';

const DeleteShowB = ({ setAlert, deleteShowB }) => {
  const [formData, setFormData] = useState({
    idA: '',
    idB: ''
  });

  const { idA, idB } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    deleteShowB(idA, idB);
  };

  return (
    <Fragment>
      <div className="sign_up-content">
        <div className="sign_up-right">
          <h2>B מחק קורס</h2>
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

DeleteShowB.propTypes = {
  setAlert: PropTypes.func.isRequired,
  deleteShowB: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlert, deleteShowB }
)(DeleteShowB);
