import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ShowItemB = ({
  isAuthenticated,
  course: { _id, nameC, imgC },
  school,
  idB
}) => {
  return (
    <Fragment>
      <Link to={`/showcases/by/${school}/${idB}/${_id}`}>
        <div className="course-1">
          <h3>{nameC} </h3>
        </div>
      </Link>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {}
)(ShowItemB);
