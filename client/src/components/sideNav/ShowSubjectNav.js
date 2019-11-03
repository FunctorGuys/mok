import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../layout/sidenavbar.css';
import ItemSideNav from '../layout/ItemSideNav';

const ShowSubjectNav = ({
  links,
  school,
  idB,
  idC,
  idD,
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
              <Link
                to={`/showcases/by/${school}/${idB}/${idC}/${idD}/${l._id}`}
                className="link"
                onClick={() => {
                  closeMenu();
                }}
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

export default ShowSubjectNav;
