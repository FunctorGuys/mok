import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { specificCourse, getShowcaseByIdB } from './../../actions/course';

class DashboardCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseList: []
    };
    if (props && props.courseId) {
      for (let item of props.courseId) {
        this.props.specificCourse(item.course);
        if (item.course) {
          this.props.specificCourse(item.course);
        } else {
          this.props.getShowcaseByIdB('pre', item.showcase);
        }
      }
    }
  }

  componentWillReceiveProps(props) {
    if (props) {
      if (props && props.course) {
        if (props.course.course) {
          if (props.courseId) {
            for (let item of props.courseId) {
              const id = item.course || item.showcase;
              if (id === props.course.course._id) {
                let tempCourses = [props.course.course];
                this.setState({
                  courseList: this.state.courseList.concat(tempCourses)
                });
              }
            }
          }
        }
      }
    }
  }
  render() {
    const newcourseList = [];
    this.state.courseList.forEach(obj => {
      if (!newcourseList.some(o => o._id === obj._id)) {
        newcourseList.push({ ...obj });
      }
    });
    return (
      <div className="course course-2">
        {newcourseList
          ? newcourseList.map((course, i) => {
              if (course.nameB) {
                return (
                  <div
                    key={i}
                    onClick={() =>
                      (window.location.href = `/showcases/by/pre/${course._id}`)
                    }
                    className="course-1"
                  >
                    <Fragment>
                      {course.img ? (
                        <img src={course.img} alt="Math" />
                      ) : (
                        <img src="https://mok.co.il/img/maths.jpg" alt="Math" />
                      )}

                      <h3>{course.nameB} </h3>

                      {course.author ? <p>{course.author}</p> : <p>ארז כהן</p>}
                    </Fragment>
                  </div>
                );
              } else {
                return (
                  <div
                    key={i}
                    onClick={() =>
                      (window.location.href = `/courses/${course._id}`)
                    }
                    className="course-1"
                  >
                    <Fragment>
                      {course.img ? (
                        <img src={course.img} alt="Math" />
                      ) : (
                        <img src="https://mok.co.il/img/maths.jpg" alt="Math" />
                      )}
                      <h3>{course.nameOfCourse} </h3>
                      {course.author ? <p>{course.author}</p> : <p>ארז כהן</p>}
                    </Fragment>
                  </div>
                );
              }
            })
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  course: state.course
});

export default connect(
  mapStateToProps,
  { specificCourse, getShowcaseByIdB }
)(withRouter(DashboardCourse));
