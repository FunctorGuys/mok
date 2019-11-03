import React from 'react';

const NavBanner = ({ school, grade, group }) => {
  return (
    <section className="text-banner">
      {console.log('school:', school, ' grade:', grade, ' group: ', group)}
      <p> {group == 4 ? ' מספר יחידות לימוד 4' : 'מספר יחידות לימוד 5'} </p>
      <p>&lt;</p>
      <p> עולים לכיתה {grade === 'yud' ? 'י' : 'יא'} </p>
      <p>&lt;</p>
      <p>
        {school === 'ironih' ? (
          <span>'בית ספר עירוני ה</span>
        ) : (
          <span>בית ספר ריאלי</span>
        )}
      </p>
    </section>
  );
};

export default NavBanner;
