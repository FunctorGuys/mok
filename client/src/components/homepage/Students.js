import React from "react";

import user1 from "../../img/user1.png";
import user2 from "../../img/user2.png";
import user3 from "../../img/user3.png";
import quote from "../../img/quote.png";

const Students = () => {
  return (
    <section className="students" id="students">
      <div className="students-wrap">
        <h2>תלמידים ממליצים</h2>
        <div className="students_boxes">
          <div className="students_box students_box-1">
            <div className="students-img">
              <img src={user1} alt="Student" />
            </div>
            <h3> שון מאיר</h3>
            <p>
              {" "}
              האתר מרכז בתוכו את כל הפתרנות לעבודות שנתנו לנו בבית הספר בצורה כל
              כך ברורה ופשוטהכשנתקעתי בשאלה כלשהי לא הייתי צריך לשבת שעות ולשבור
              את הראש לבד ישר היה לי פתרון זמין שעזר לי להבין
            </p>
            <img className="quote-1" src={quote} alt="Quote" />
          </div>
          <div className="students_box">
            <div className="students-img">
              <img src={user2} alt="Student" />
            </div>
            <h3> דניאל בולטניקוב </h3>
            <p>אף פעם לא נתקלתי בשיטת הוראה טובה כל כך !עזרתם לי המון </p>
          </div>
          <div className="students_box students_box-3">
            <div className="students-img">
              <img src={user3} alt="Student" />
            </div>
            <h3>אלינור אברמוב </h3>
            <p className="third_text">
              תודה רבה לכם על כל ההסברים המעולים שלכם הסרטונים שלכם פשוט כל כך
              מדהימים שאפילו לא הייתי צריך לקבוע שיעורים פרטיים חסכתם לי הרבה{" "}
            </p>
            <img className="quote-3" src={quote} alt="Quote" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Students;
