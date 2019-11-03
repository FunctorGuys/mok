import React from 'react';

const DisplayShow = ({ linkObject }) => {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <iframe
        src={linkObject.link}
        allowfullscreen
        frameborder="0"
        style={{
          display: 'block',
          maxWidth: 'calc(100vw - 20px)',
          margin: 'auto'
        }}
        width="1000"
        height="600"
        frameBorder="0"
        allow="autoplay; allowFullScreen"
        id="myFrame"
      ></iframe>
    </div>
  );
};

export default DisplayShow;
