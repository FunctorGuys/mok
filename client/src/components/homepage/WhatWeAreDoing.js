import React from 'react';

import pointer from '../../img/pointer.webp';
import display from '../../img/display.png';
import timer from '../../img/timer.png';

const Landing = () => {
  return (
    <section className="features" id="whatWeAreDoing">
      <div className="features-wrap">
        <div className="features_boxes">
          <div className="features_box">
            <div className="box-text">
              <p>גישה נוחה</p>
              <p>לתכנים</p>
            </div>
            <div className="box-img">
              <img src={pointer} alt="Play button" />
            </div>
          </div>
          <div className="features_box">
            <div className="box-text">
              <p>שיעורי וידאו לפי</p>
              <p>הנושאים העדכניים ביותר</p>
            </div>
            <div className="box-img">
              <img src={display} alt="Display" />
            </div>
          </div>
          <div className="features_box">
            <div className="box-text">
              <p>פתרונות מלאים</p>
              <p>אונליין</p>
            </div>
            <div className="box-img">
              <img src={timer} alt="Timer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
