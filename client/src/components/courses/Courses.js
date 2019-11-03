import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCourses } from "../../actions/course";
import Spinner from "../layout/Spinner";
import CourseItem from "./CourseItem";

const Courses = ({
  getCourses,
  course: { courses, loading },
  user,
  history
}) => {
  useEffect(() => {
    getCourses();
  }, [getCourses]);
  return loading ? (
    <Spinner /> 
  ) : (
    <Fragment>
      <h1 className="large text-primary">קורסי הקיץ שלנו</h1>
      <p className="lead">
        <i className="fas fa-user" />
        בחרו את הקורס המתאים לכם
      </p>
      <div className="courses displayinlineFlex" >
        {courses.map(c => (
          <CourseItem key={c._id} course={c} history={history} />
        ))}
      </div>
    </Fragment>
  );
}; 

Courses.propTypes = {
  getCourses: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course
  // error: state.course.error
});

export default connect(
  mapStateToProps,
  { getCourses }
)(Courses);
