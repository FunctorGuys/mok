import React from 'react';
import search from '../../img/search.webp';
import video from '../../img/video.png';
import thumbsUp from '../../img/thumbsUp.png';

const About = () => {
  return (
    <section className="about">
      <div className="about-wrap">
        <h2>מה אנחנו עושים?</h2>
        <div className="about-boxes">
          <div className="about-box">
            <div className="about-box-img">
              <img src={search} alt="Search" />
            </div>
            <h3>מקור מידע מהימן ומקצועי</h3>
            <p>
              את תכני האתר כתבו מורים מנוסים בעלי ותק רב וניסיון של עשרות שנים
              בתחום.
            </p>
          </div>
          <div className="about-box">
            <div className="about-box-img">
              <img src={video} alt="Video" />
            </div>
            <h3>סרטונים לצפייה ישירה</h3>
            <p>
              הסרטונים באיכות צפייה ושמע HD. ניתן להגביר את מהירות הסרטון ואת
              קצב הצפייה לפי טעמכם האישי.
            </p>
          </div>
          <div className="about-box">
            <div className="about-box-img">
              <img src={thumbsUp} alt="Thumbs up" />
            </div>
            <h3>למידה עצמאית באינטרנט </h3>
            <p>
              {' '}
              באתר שלנו אנו מספקים תוכן ומידע למגוון רחב של נושאים ופתרון של
              שאלות. האתר מתאים לכל תלמיד בית ספר שרוצה ללמוד עצמאית ובקצב שלו
              ולקבל פתרונות לשאלות.{' '}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
