import React from 'react';
import { decrypt } from '../../utils/decrypt';

const DisplayShowcase = ({ linkObject }) => {
  const fileId = decrypt(linkObject.link);
  return (
    <div>
      <div style={{ padding: '20%', position: 'relative' }}>
        <iframe
          src={fileId}
          allowfullscreen
          frameborder="0"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%'
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default DisplayShowcase;
