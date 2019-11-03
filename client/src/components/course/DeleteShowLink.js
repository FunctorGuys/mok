import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from './../../actions/alert';
import PropTypes from 'prop-types';
import { deleteShowLink } from '../../actions/course';

const DeleteShowLink = ({ setAlert, deleteShowLink }) => {
  const [formData, setFormData] = useState({
    idA: '',
    idB: '',
    idC: '',
    idD: '',
    idLink: ''
  });

  const { idA, idB, idC, idD, idLink } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    deleteShowLink(idA, idB, idC, idD, idLink);
  };

  return (
    <Fragment>
      <div className="sign_up-content">
        <div className="sign_up-right">
          <h2> מחק לינק</h2>
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

            <div className="row-1">
              <input
                type="text"
                placeholder=" לינק"
                name="idLink"
                value={idLink}
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

DeleteShowLink.propTypes = {
  setAlert: PropTypes.func.isRequired,
  deleteShowLink: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlert, deleteShowLink }
)(DeleteShowLink);
