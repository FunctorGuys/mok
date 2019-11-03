import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from './../../actions/alert';
import PropTypes from 'prop-types';
import { deleteShowA } from '../../actions/course';

const DeleteShowA = ({ setAlert, deleteShowA }) => {
  const [formData, setFormData] = useState({
    idA: ''
  });

  const { idA } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    deleteShowA(idA);
  };

  return (
    <Fragment>
      <div className="sign_up-content">
        <div className="sign_up-right">
          <h2>A מחק קורס</h2>
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

DeleteShowA.propTypes = {
  setAlert: PropTypes.func.isRequired,
  deleteShowA: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlert, deleteShowA }
)(DeleteShowA);
