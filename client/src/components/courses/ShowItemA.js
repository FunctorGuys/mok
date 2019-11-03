import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ShowItemA = ({
  isAuthenticated,
  course: { _id, nameB, price, author },
  nameA
}) => {
  return (
    <Fragment>
      <Link to={`/showcases/by/${nameA}/${_id}`}>
        <div className="course-1">
          <h3>{nameB} </h3>
          <h5>מחיר הקורס - {price === '0' ? 'חינם' : price + ' ש"ח'}</h5>
          <h5>{author ? author : 'ארז כהן'}</h5>
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
)(ShowItemA);
