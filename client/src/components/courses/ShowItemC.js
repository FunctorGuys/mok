import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ShowItemC = ({
  isAuthenticated,
  course: { _id, nameD, imgD, details },
  school,
  idB,
  idC
}) => {
  const guestItem = (
    <Link to={'/register'}>
      <div className="course-1">
        <h3>{nameD} </h3>
        <p>{details}</p>
      </div>
    </Link>
  );

  const authItem = (
    <Link to={`/showcases/by/${school}/${idB}/${idC}/${_id}`}>
      <div className="course-1">
        <h3>{nameD} </h3>
        <p>{details}</p>
      </div>
    </Link>
  );

  return <Fragment>{isAuthenticated ? authItem : guestItem}</Fragment>;
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {}
)(ShowItemC);
