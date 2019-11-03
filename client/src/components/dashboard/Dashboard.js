import React, { Fragment, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentPayment } from './../../actions/payment';
import DashboardCourse from './DashboardCourse';
import CourseItem from './../courses/CourseItem';
import WhatWeAreDoing from '../homepage/WhatWeAreDoing';
import Intro from '../homepage/Intro';
import About from '../homepage/About';

const Dashboard = ({
  auth: { user },
  getCurrentPayment,
  paymentOrder: { payment }
}) => {
  useEffect(() => {
    getCurrentPayment();
  }, [getCurrentPayment]);

  return (
    <Fragment>
      <div style={{ textAlign: 'center' }}>
        <div>
          <Fragment>
            {payment.pay ? (
              <Fragment>
                <div
                  style={{
                    fontSize: '40px',
                    padding: '40px',
                    fontWeight: 'bold'
                  }}
                >
                  <p className="lead">{user && user.name} היי</p>
                </div>
                <p>:רשימת הקורסים שלך</p>

                <DashboardCourse courseId={payment.pay} />

                <p>:רכישת קורסים נוספים</p>
                <div className="solutions" style={{ padding: '40px' }}>
                  <Link to="/courses/by/academy" className="btn_green-2">
                    אקדמיה
                  </Link>
                  <Link to="/showcases/by/pre" className="btn_green-2">
                    מכינות להנדסה הכרה הדדית
                  </Link>
                  <Link to="/courses/by/school" className="btn_green-2">
                    בתי ספר
                  </Link>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <Intro />
                <WhatWeAreDoing />
                <About />
              </Fragment>
            )}
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentPayment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  paymentOrder: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  paymentOrder: state.paymentOrder
});

export default connect(
  mapStateToProps,
  { getCurrentPayment }
)(Dashboard);
