import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <Fragment>
      <section className="intro">
        <div className="intro_content">
          {/* <div className="play">
            <img src={playLogo} alt="Play button" />
          </div> */}
          <div className="intro_content-title">
            <h1>,ללמוד אונליין</h1>
            <h1>בקצב שלך</h1>
          </div>
          <div className="intro_content-text">
            <p>.בתי ספר. מכינות אקדמיות</p>
            <p>.מוסדות להשכלה גבוהה</p>
          </div>
          <div className="solutions">
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
        </div>
      </section>
    </Fragment>
  );
};

export default Intro;
