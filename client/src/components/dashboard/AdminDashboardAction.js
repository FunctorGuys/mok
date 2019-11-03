import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboardAction = () => {
  return (
    <div style={{ textAlign: 'right' }}>
      <div className="dash-buttons" style={{ padding: '5px' }}>
        <Link to="../courses/addCourse" className="btn btn-light">
          <i className="fas fa-user-circle text-primary" /> הוספת קורסים
        </Link>
      </div>
      <div className="dash-buttons" style={{ padding: '5px' }}>
        <Link to="../courses/addLink" className="btn btn-light">
          <i className="fas fa-user-circle text-primary" /> הוספת לינקים לקורסים
        </Link>
      </div>
      <div className="dash-buttons" style={{ padding: '5px' }}>
        <Link to="../courses/updateCourse" className="btn btn-light">
          <i className="fas fa-user-circle text-primary" /> ערוך קורס
        </Link>
      </div>
      <div className="dash-buttons" style={{ padding: '5px' }}>
        <Link to="../courses/addShowA" className="btn btn-light">
          <i className="fas fa-user-circle text-primary" /> הוספת ShowA
        </Link>
      </div>
      <div className="dash-buttons" style={{ padding: '5px' }}>
        <Link to="../courses/addShowB" className="btn btn-light">
          <i className="fas fa-user-circle text-primary" /> הוספת ShowB
        </Link>
      </div>
      <div className="dash-buttons" style={{ padding: '5px' }}>
        <Link to="../courses/addShowC" className="btn btn-light">
          <i className="fas fa-user-circle text-primary" /> הוספת ShowC
        </Link>
      </div>
      <div className="dash-buttons" style={{ padding: '5px' }}>
        <Link to="../courses/addShowD" className="btn btn-light">
          <i className="fas fa-user-circle text-primary" /> הוספת ShowD
        </Link>
      </div>
      <div className="dash-buttons" style={{ padding: '5px' }}>
        <Link to="../courses/addLinkToShow" className="btn btn-light">
          <i className="fas fa-user-circle text-primary" /> הוספת לינק ל-Show
        </Link>
      </div>
      <div className="dash-buttons" style={{ padding: '5px' }}>
        <Link to="../courses/updateShowB" className="btn btn-light">
          עדכון ShowB
        </Link>
      </div>
      <div className="dash-buttons" style={{ padding: '5px' }}>
        <Link to="../courses/deleteShowA" className="btn btn-light">
          <i className="fas fa-user-circle text-primary" /> מחיקת ShowA
        </Link>
      </div>
      <div className="dash-buttons" style={{ padding: '5px' }}>
        <Link to="../courses/deleteShowB" className="btn btn-light">
          <i className="fas fa-user-circle text-primary" /> מחיקת ShowB
        </Link>
      </div>
      <div className="dash-buttons" style={{ padding: '5px' }}>
        <Link to="../courses/deleteShowC" className="btn btn-light">
          <i className="fas fa-user-circle text-primary" /> מחיקת ShowC
        </Link>
      </div>
      <div className="dash-buttons" style={{ padding: '5px' }}>
        <Link to="../courses/deleteShowD" className="btn btn-light">
          <i className="fas fa-user-circle text-primary" /> מחיקת ShowD
        </Link>
      </div>
      <div className="dash-buttons" style={{ padding: '5px' }}>
        <Link to="../courses/deleteShowLink" className="btn btn-light">
          <i className="fas fa-user-circle text-primary" /> מחיקת ShowLink
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboardAction;
