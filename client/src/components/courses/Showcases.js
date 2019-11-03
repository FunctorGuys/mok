import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getShowcaseBySchool } from '../../actions/course';
import Spinner from '../layout/Spinner';
import ShowItemA from './ShowItemA';

const Showcases = ({
  getShowcaseBySchool,
  showcase: { courseA, loading },
  match
}) => {
  useEffect(() => {
    getShowcaseBySchool(match.params.school);
  }, [match.params.school]);

  return loading ? (
    <div className="iframe-loading">Loading&#8230;</div>
  ) : !courseA ? (
    <div className="iframe-loading">Loading&#8230;</div>
  ) : (
    <Fragment>
      <section className="text-banner text-banner-2">
        {match.params.school === 'pre' ? (
          <h1>מכינות להנדסה הכרה הדדית</h1>
        ) : null}
      </section>
      <section className="solutions-menu">
        <div className="menu-content about">
          <div className="course course-2">
            {courseA && courseA[0]
              ? courseA[0].nameOfCourseB
                  .sort((a, b) => (a.indexLink > b.indexLink ? 1 : -1))
                  .map(c =>
                    c.nameB.toString() !== 'hide' ? (
                      <ShowItemA
                        key={c._id}
                        course={c}
                        nameA={courseA[0].nameOfCourseA}
                      />
                    ) : null
                  )
              : null}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Showcases.propTypes = {
  getShowcaseBySchool: PropTypes.func.isRequired,
  showcase: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  showcase: state.showcase
});

export default connect(
  mapStateToProps,
  { getShowcaseBySchool }
)(Showcases);
