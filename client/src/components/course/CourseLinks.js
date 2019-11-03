import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCourse } from '../../actions/course';
import LinkItem from './LinkItem';
import { withRouter, Redirect } from 'react-router-dom';
import './courseLinks.css';
import SideNav from './../layout/SideNav';
import DisplayShowcase from './DisplayShowcase';

const CourseLinks = ({
  auth,
  getCourse,
  course: { course, loading, error },
  match,
  history
}) => {
  useEffect(() => {
    getCourse(match.params.id);
  }, [match.params.id, match.params.link]);

  return !auth.loading ? (
    !auth.isAuthenticated ? (
      <Redirect to="/" />
    ) : loading ? (
      <div className="iframe-loading">Loading&#8230;</div>
    ) : (
      <Fragment>
        {error ? history.push(`/syllabus/${match.params.id}`) : null}

        {course &&
        course.links &&
        course.links.length === 1 &&
        course.links[0].type === 'showcase' ? (
          <DisplayShowcase linkObject={course.links[0]} />
        ) : (
          <Fragment>
            {course && course.links ? (
              <Fragment>
                <SideNav links={course.links} courseId={course._id} />
                <div id="main">
                  {course && course.links.length > 0 ? (
                    match.params.link ? (
                      <LinkItem
                        linkObject={course.links.find(
                          l => l._id === match.params.link
                        )}
                      />
                    ) : (
                      <LinkItem linkObject={course.links[0]} />
                    )
                  ) : (
                    <p>אין קורסים</p>
                  )}
                </div>
              </Fragment>
            ) : null}
          </Fragment>
        )}
      </Fragment>
    )
  ) : null;
};

CourseLinks.propTypes = {
  course: PropTypes.object.isRequired,
  getCourse: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course,
  auth: state.auth
});

export default withRouter(
  connect(
    mapStateToProps,
    { getCourse }
  )(CourseLinks)
);
