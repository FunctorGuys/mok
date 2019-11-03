import React, { Fragment, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getShowcaseByIdD } from '../../actions/course';
import Spinner from '../layout/Spinner';
import DisplayShow from '../course/DisplayShow';
import { withRouter } from 'react-router-dom';
import ShowSideNav from '../sideNav/ShowSideNav';
import ShowLinkItem from '../course/ShowLinkItem';

const ShowcasesD = ({
  auth,
  getShowcaseByIdD,
  showcase: { courseA, loading, error },
  match,
  history
}) => {
  useEffect(() => {
    getShowcaseByIdD(
      match.params.school,
      match.params.idB,
      match.params.idC,
      match.params.idD
    );
  }, [
    match.params.school,
    match.params.idB,
    match.params.idC,
    match.params.idD
  ]);

  return !auth.loading ? (
    !auth.isAuthenticated ? (
      <Redirect to="/" />
    ) : loading ? (
      <div className="iframe-loading">Loading&#8230;</div>
    ) : (
      <Fragment>
        {error
          ? history.push(
              `/showsyllabus/${match.params.school}/${match.params.idB}/${match.params.idC}/${match.params.idD}`
            )
          : null}
        {courseA &&
        courseA.links &&
        courseA.links.length === 1 &&
        courseA.links[0].type === 'showcase' ? (
          <DisplayShow linkObject={courseA.links[0]} />
        ) : (
          <Fragment>
            {courseA && courseA.links ? (
              <Fragment>
                <ShowSideNav
                  links={courseA.links}
                  school={match.params.school}
                  idB={match.params.idB}
                  idC={match.params.idC}
                  idD={courseA._id}
                />
                <div id="main">
                  {courseA.links.length > 0 ? (
                    match.params.link ? (
                      <ShowLinkItem
                        linkObject={courseA.links.find(
                          l => l._id === match.params.link
                        )}
                      />
                    ) : (
                      <ShowLinkItem linkObject={courseA.links[0]} />
                    )
                  ) : null}
                </div>{' '}
              </Fragment>
            ) : null}
          </Fragment>
        )}
      </Fragment>
    )
  ) : null;
};

ShowcasesD.propTypes = {
  getShowcaseByIdD: PropTypes.func.isRequired,
  showcase: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  showcase: state.showcase,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getShowcaseByIdD }
)(withRouter(ShowcasesD));
