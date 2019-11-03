import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
//import { addPaymentToDb } from '../../actions/payment';

const ThanksForBuy = ({
  auth,
  course: { course, loading },
  match,
  addPaymentToDb,
  history
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      history.push('/dashboard');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Fragment>
      <div className="confirmMail">
        <p>הקורס נוסף בהצלחה לחשבון שלכם!</p>
        <p>מיד תועברו לרשימת הקורסים שלכם...</p>
      </div>
      {/* {console.log(
        "paymentId: ",
        new URLSearchParams(window.location.search).get("paymentId")
      )}
      {console.log(
        "PayerID: ",
        new URLSearchParams(window.location.search).get("PayerID")
      )} */}
      {/* {addPaymentToDb(
        new URLSearchParams(window.location.search).get('paymentId'),
        new URLSearchParams(window.location.search).get('PayerID'),
        history
      )} */}
    </Fragment>
  );
};

ThanksForBuy.propTypes = {
  auth: PropTypes.object.isRequired,
  course: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(withRouter(ThanksForBuy));
