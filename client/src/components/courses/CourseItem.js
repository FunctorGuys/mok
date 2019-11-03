import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const CourseItem = ({
  isAuthenticated,
  course: { _id, nameOfCourse, price, img, author }
}) => {
  const guestItem = (
    <Link to={'/register'}>
      <div className="course-1">
        {img ? <img src={img} alt="Math" /> : null}

        <h3>{nameOfCourse} </h3>
        <h5 style={{ paddingRight: '5px' }}>
          מחיר הקורס - {price === '0' ? 'חינם' : price + ' ש"ח'}
        </h5>
        <h5 style={{ paddingRight: '5px' }}>{author ? author : 'ארז כהן'}</h5>
      </div>
    </Link>
  );

  const authItem = (
    <Link to={`/courses/${_id}`}>
      <div className="course-1">
        {img ? <img src={img} alt="Math" /> : null}

        <h3>{nameOfCourse} </h3>
        <h5 style={{ paddingRight: '5px' }}>
          מחיר הקורס - {price === '0' ? 'חינם' : price + ' ש"ח'}
        </h5>
        <h5 style={{ paddingRight: '5px' }}>{author ? author : 'ארז כהן'}</h5>
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
)(CourseItem);
