import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getShowcaseByIdB } from '../../actions/course';
import ShowItemB from './ShowItemB';

const ShowcasesB = ({
  getShowcaseByIdB,
  showcase: { courseA, loading },
  match
}) => {
  useEffect(() => {
    getShowcaseByIdB(match.params.school, match.params.idB);
  }, [match.params.school]);

  return loading ? (
    <div className="iframe-loading">Loading&#8230;</div>
  ) : (
    <Fragment>
      <section className="text-banner text-banner-2">
        <h1>{courseA.nameB}</h1>
      </section>
      <section className="solutions-menu">
        <div className="menu-content about">
          <div className="course course-2">
            {courseA.nameOfCourseC
              ? courseA.nameOfCourseC
                  .sort((a, b) => (a.indexLink > b.indexLink ? 1 : -1))
                  .map(c => (
                    <ShowItemB
                      key={c._id}
                      course={c}
                      school={match.params.school}
                      idB={courseA._id}
                    />
                  ))
              : null}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

ShowcasesB.propTypes = {
  getShowcaseByIdB: PropTypes.func.isRequired,
  showcase: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  showcase: state.showcase
});

export default connect(
  mapStateToProps,
  { getShowcaseByIdB }
)(ShowcasesB);
