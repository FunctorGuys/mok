import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCoursesBySchool } from '../../actions/course';
import Spinner from '../layout/Spinner';
import CourseItem from './CourseItem';
import Line from './Line';

const CoursesBySchool = ({
  getCoursesBySchool,
  course: { courses, loading },
  user,
  match,
  history
}) => {
  useEffect(() => {
    getCoursesBySchool(match.params.school);
  }, [match.params.school]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className="text-banner text-banner-2">
        {match.params.school === 'free' ? <h1>דוגמאות לפתרונות</h1> : null}
        {match.params.school === 'ironih' ? <h1>'בית ספר עירוני ה</h1> : null}
        {match.params.school === 'reali' ? <h1>בית ספר ריאלי</h1> : null}
        {match.params.school === 'pre' ? <h1>מכינה</h1> : null}
        {match.params.school === 'school' ? <h1>בית ספר</h1> : null}
        {match.params.school === 'erez' ? <h1>ארז</h1> : null}
      </section>

      <section className="solutions-menu">
        <div className="solutions-menu-wrap">
          <div className="menu-content about">
            <div className="course course-2">
              {courses.map(c => (
                <CourseItem key={c._id} course={c} history={history} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

CoursesBySchool.propTypes = {
  getCoursesBySchool: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course
  // error: state.course.error
});

export default connect(
  mapStateToProps,
  { getCoursesBySchool }
)(CoursesBySchool);
