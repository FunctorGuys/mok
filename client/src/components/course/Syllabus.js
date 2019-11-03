import React, { Fragment, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import { Link, withRouter } from 'react-router-dom';
import { specificCourse } from '../../actions/course';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPaymentCourse } from '../../actions/payment';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import config from '../../utils/configs.json';

import mathsLogo from '../../img/maths.png';
import timelapseLogo from '../../img/timelapse.png';
import displayLogo from '../../img/display.png';
import videoLogo from '../../img/video.png';
import fileLogo from '../../img/file.png';

import '../layout/sidenavbar.css';
import SubjectNav from '../layout/SubjectNav';
import { TableOfItems } from '../layout/SideNav';

const Syllabus = ({
  auth,
  course: { course, loading },
  match,
  addPaymentCourse,
  specificCourse,
  payment,
  history
}) => {
  useEffect(() => {
    specificCourse(match.params.id);
  }, [specificCourse]);

  const openSubMenu = () => {
    var dropdown = document.getElementsByClassName('accordion');
    var i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener('click', function() {
        this.classList.toggle('active');
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none';
        } else {
          dropdownContent.style.display = 'block';
        }
      });
    }
  };
  const onSuccess = payment => {
    console.log('The payment was succeeded!', payment);
    onSubmit();
    history.push('/success');
  };

  const onCancel = data => {
    console.log('The payment was cancelled!', data);
    history.push('/cancel');
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
    addPaymentCourse({
      userId: auth.user._id,
      userName: auth.user.name,
      userEmail: auth.useremail,
      courseId: course._id,
      courseName: course.nameOfCourse,
      price: course.price,
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
  const getSubject = () => {
    const allSubject = course.links.map(l => {
      return l.subject;
    });
    let uniq = [...new Set(allSubject)];

    return uniq;
  };

  return loading || course === null || course === undefined ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className="math_course">
        <div className="math_course-wrap">
          <div className="math_course-text">
            <h2> {course.fLine ? course.fLine : course.nameOfCourse} </h2>
            <h3> {course.grade ? course.grade : null}</h3>

            {course.group ? (
              <pre>{course.group}</pre>
            ) : (
              <p>
                {' '}
                מתאים לכל מי שמעוניין לקבל פתרונות מלאים ומפורטים לעבודות בית
                שניתנו בבית הספר מורכב מסרטונים המכילים את כל הכלים הנדרשים עבור
                התלמיד כדי לאפשר למידה עצמאית.
              </p>
            )}
            <h4>עדכון אחרון {course.lUpdate ? course.lUpdate : '07/2019'} </h4>
          </div>
        </div>
      </section>

      <section className="menu">
        <div className="menu-wrap">
          <div className="videos">
            <h2>תוכן הפתרונות</h2>
            <div>
              <TableOfItems
                links={course.links}
                courseId={match.params.id}
                onHandleClick={onHandleClick}
              />
            </div>
          </div>
          <div className="learning">
            <img src={mathsLogo} alt="Maths" />

            {auth.isAuthenticated ? (
              <Fragment>
                <div className="row">
                  <p>מחיר הקורס {course.price ? course.price : '150'} ש"ח </p>
                </div>
                <PaypalExpressBtn
                  env={env}
                  client={client}
                  currency={currency}
                  total={Number(course.price)}
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
            <p className="modal-text">
              מחיר כל הסרטונים {course.price ? course.price : '150'} ש"ח
            </p>
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

Syllabus.propTypes = {
  auth: PropTypes.object.isRequired,
  course: PropTypes.object.isRequired,
  specificCourse: PropTypes.func.isRequired,
  addPaymentCourse: PropTypes.func.isRequired
};

// mapStateToProps;
// const mapStateToProps = state => {
//   return {
//     course: state.course,
//     auth: state.auth,
//     paymentOrder: state.paymentOrder
//   };
// };
const mapStateToProps = state => {
  return {
    course: state.course,
    auth: state.auth,
    paymentOrder: state.paymentOrder.payment.payment
  };
};

export default connect(
  mapStateToProps,
  { specificCourse, addPaymentCourse }
)(withRouter(Syllabus));
