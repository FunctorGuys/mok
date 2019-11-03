import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getShowcaseByIdC } from '../../actions/course';
import ShowItemC from './ShowItemC';

const ShowcasesC = ({
  getShowcaseByIdC,
  showcase: { courseA, loading },
  match
}) => {
  useEffect(() => {
    getShowcaseByIdC(match.params.school, match.params.idB, match.params.idC);
  }, [match.params.school]);

  return loading ? (
    <div className="iframe-loading">Loading&#8230;</div>
  ) : (
    <Fragment>
      <section className="text-banner text-banner-2">
        <h1>{courseA.nameC}</h1>
      </section>
      <section className="solutions-menu">
        <div className="menu-content about">
          <div className="course course-2">
            {courseA.nameOfCourseD
              ? courseA.nameOfCourseD
                  .sort((a, b) => (a.indexLink > b.indexLink ? 1 : -1))
                  .map(c => (
                    <ShowItemC
                      key={c._id}
                      course={c}
                      school={match.params.school}
                      idB={match.params.idB}
                      idC={courseA._id}
                    />
                  ))
              : null}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

ShowcasesC.propTypes = {
  getShowcaseByIdC: PropTypes.func.isRequired,
  showcase: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  showcase: state.showcase
});

export default connect(
  mapStateToProps,
  { getShowcaseByIdC }
)(ShowcasesC);
