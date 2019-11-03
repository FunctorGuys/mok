import React, { Fragment, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import { Link, withRouter } from 'react-router-dom';
import { getShowcaseByIdB } from '../../actions/course';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPaymentShowcase } from '../../actions/payment';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import config from '../../utils/configs.json';

import mathsLogo from '../../img/maths.png';
import displayLogo from '../../img/display.png';
import videoLogo from '../../img/video.png';
import fileLogo from '../../img/file.png';

import '../layout/sidenavbar.css';

const ShowSyllabus = ({
  auth,
  getShowcaseByIdB,
  showcase: { courseA, loading, error },
  match,
  addPaymentShowcase,
  history
}) => {
  useEffect(() => {
    getShowcaseByIdB(match.params.school, match.params.idB);
  }, [getShowcaseByIdB]);

  const onSuccess = payment => {
    console.log('The payment was succeeded!', payment);
    onSubmit();
    history.push('/success');
  };

  const onCancel = data => {
    console.log('The payment was cancelled!', data);
    history.push('/');
  };

  const onError = err => {
    console.log('Error!', err);
  };

  let env = 'production'; // you can set here to 'production' for production
  let currency = 'ILS'; // or you can set this value from your props or state
  const client = {
    sandbox: 'YOUR-SANDBOX-APP-ID',
    production: config.client_id //add the client_id of production
  };
  const onSubmit = () => {
    addPaymentShowcase({
      userId: auth.user._id,
      userName: auth.user.name,
      userEmail: auth.useremail,
      showcaseId: match.params.idB,
      courseName: courseA.nameB,
      price: courseA.price,
      history
    });
  };

  const onHandleClick = e => {
    e.preventDefault();
    const element = document.getElementsByClassName('modal')[0];
    element.style.display = 'block';
  };

  const onHandleClose = e => {
    const element = document.getElementsByClassName('modal')[0];
    element.style.display = 'none';
  };

  return loading || courseA === null || courseA === undefined ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className="math_course">
        <div className="math_course-wrap">
          <div className="math_course-text">
            <h2>
              {' '}
              {courseA && courseA.title ? courseA.title : courseA.nameB}{' '}
            </h2>
            <h3>
              {' '}
              {courseA && courseA.titleB
                ? courseA.titleB
                : courseA.nameOfCourseC &&
                  courseA.nameOfCourseC.map(c => <p>{c.nameC}</p>)}
            </h3>

            {courseA && courseA.titleC ? (
              <pre>{courseA.titleC}</pre>
            ) : (
              <p>
                {' '}
                מתאים לכל מי שמעוניין לקבל פתרונות מלאים ומפורטים לעבודות בית
                שניתנו בבית הספר מורכב מסרטונים המכילים את כל הכלים הנדרשים עבור
                התלמיד כדי לאפשר למידה עצמאית.
              </p>
            )}
            <h4>
              עדכון אחרון{' '}
              {courseA && courseA.lUpdate ? courseA.lUpdate : '07/2019'}{' '}
            </h4>
          </div>
        </div>
      </section>

      <section className="menu">
        <div className="menu-wrap">
          <div className="videos">
            <Fragment>
              <h2>תשלום</h2>
              <div className="row">
                <p>מחיר הקורס {courseA.price} ש"ח </p>
              </div>
              <PaypalExpressBtn
                env={env}
                client={client}
                currency={currency}
                total={Number(courseA.price)}
                onError={onError}
                onSuccess={onSuccess}
                onCancel={onCancel}
              />
            </Fragment>
          </div>
          <div className="learning">
            <img src={mathsLogo} alt="Maths" />

            {auth.isAuthenticated ? (
              <Fragment>
                <div className="row">
                  <p>מחיר הקורס {courseA.price} ש"ח </p>
                </div>
                <PaypalExpressBtn
                  env={env}
                  client={client}
                  currency={currency}
                  total={Number(courseA.price)}
                  onError={onError}
                  onSuccess={onSuccess}
                  onCancel={onCancel}
                />
              </Fragment>
            ) : (
              <Link to="/login" className="btn_green">
                התחל ללמוד
              </Link>
            )}

            <h3>תכולת הפתרונות</h3>

            <div className="row">
              <p> למדו באופן עצמאי בקצב שלכם, בלי לחץ! </p>
              <img src={displayLogo} alt="Display" />
            </div>
            <div className="row">
              <p>סרטוני הסבר באיכות 1080pניתן לצפייה גם מהמכשיר הנייד</p>
              <img src={videoLogo} alt="Video" />
            </div>
            <div className="row">
              <p> שיטת לימוד המשקפת את רמת החומר הנלמד במוסדות לימוד </p>
              <img src={fileLogo} alt="File" />
            </div>
            {/*<div className="green-line" />
             <div className="social">
              <a href="#">
                <img src="img/google.png" alt="Google" />
              </a>
              <a href="#">
                <img src="img/twitter.png" alt="twitter" />
              </a>
              <a href="#">
                <img src="img/facebook.png" alt="facebook" />
              </a>
              <p>שתף</p>
            </div> */}
          </div>
        </div>
      </section>
      <section className="details">
        <div className="details-wrap">
          <h2>פרטים נוספים </h2>
          <ul className="list">
            <li> את הקורסים מדריכים מורים בעלי רקע של עשרות שנים בתחום</li>
            <li> חומרי הלימוד שלנו מסודרים היטב ומועברים בצורה ברורה ביותר</li>
            <li>
              {' '}
              האתר הוקם כדי לעזור לכם לענות על השאלות ולקבל מענה באופן יותר זמין
              ומסודר{' '}
            </li>
            <li>
              {' '}
              אתרנו ממשיך לגדול בעשייה מתמדת תוך דאגה לתוכן חדש ואיכותי, פיתוח
              האתר בעשייה יומיומית
            </li>
          </ul>
        </div>
      </section>
      <div className="modal">
        <div className="modal-content">
          {/* <span className="close" onClick={onHandleClose}>
            &times;
          </span> */}
          <div className="modal-main">
            <p className="modal-text">מחיר כל הסרטונים {courseA.price} ש"ח</p>
            <p className="modal-text">כדי לצפות תחילה יש לבצע תשלום</p>
            <button className="paybtn" onClick={onHandleClose}>
              סגור
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ShowSyllabus.propTypes = {
  auth: PropTypes.object.isRequired,
  getShowcaseByIdB: PropTypes.func.isRequired,
  showcase: PropTypes.object.isRequired,
  addPaymentShowcase: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    showcase: state.showcase,
    auth: state.auth,
    paymentOrder: state.paymentOrder.payment.payment
  };
};

export default connect(
  mapStateToProps,
  { getShowcaseByIdB, addPaymentShowcase }
)(withRouter(ShowSyllabus));
