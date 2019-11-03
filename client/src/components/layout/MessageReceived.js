import React, { Fragment, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const MessageReceived = ({ history }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      history.push('/dashboard');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Fragment>
      <div className="confirmMail">
        <p>ההודעה שלך התקבלה בהצלחה</p>
        <p>נבחן את הפנייה בהקדם</p>
        <p>מייד תועבר </p>
      </div>
    </Fragment>
  );
};

export default withRouter(MessageReceived);
