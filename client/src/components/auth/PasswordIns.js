import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

const PasswordIns = ({ history }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      history.push('/login');
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="sign_up">
      <div className="sign_up-content">
        <div className="sign_up-right" style={{ padding: '30px' }}>
          <h3>בכדי לאפס את הסיסמה, אנא פעל על פי ההוראות שנשלחו למייל</h3>
          <h3>במידה ולא קיבלת את המייל, יש לבדוק בתיקיית דואר זבל/ספאם</h3>

          <div className="login">
            <p>
              <Link class="form-btn" to="/login">
                סיים
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(PasswordIns);
