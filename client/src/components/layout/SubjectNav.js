import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './sidenavbar.css';
import ItemSideNav from './ItemSideNav';

const SubjectNav = ({
  links,
  courseId,
  subject,
  style,
  className,
  onHandleClick,
  closeMenu
}) => {
  return (
    <div style={style} className={className}>
      {links
        .filter(l => l.subject === subject)
        .sort((a, b) => (a.indexLink > b.indexLink ? 1 : -1))
        .map(l => {
          return (
            <div className="video" key={l._id}>
              {console.log(
                'pathname: ',
                window.location.pathname.includes('courses')
              )}
              <Link
                to={`/courses/${courseId}/${l._id}`}
                className="link"
                onClick={
                  window.location.pathname.includes('courses')
                    ? closeMenu
                    : onHandleClick
                }
              >
                <ItemSideNav
                  key={l._id}
                  link={l.link}
                  name={l.name}
                  type={l.type}
                />
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default SubjectNav;
