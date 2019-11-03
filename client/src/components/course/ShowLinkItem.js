/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from 'react';
import './courseLinks.css';
import config from '../../utils/configs.json';
const $ = require('jquery');
const EMBEDED_TYPE = {
  VIDEO: 'video',
  PDF: 'pdf'
};

let myInterval = null;
let initialInterval = null;

const ShowLinkItem = ({ linkObject }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('myFrame initialuseEffect');
    initialInterval = setInterval(() => {
      console.log('myFrame initialInterval');
      $(document).ready(function() {
        $('#myFrame').attr(
          'src',
          `${
            linkObject.type === EMBEDED_TYPE.PDF
              ? `https://docs.google.com/gview?url=${linkObject.link}&embedded=true`
              : config.vimeoURL + linkObject.link
          }`
        );
      });
    }, 3000);
  }, []);

  useEffect(() => {
    setLoading(true);
    $(document).ready(function() {
      $('#myFrame').attr(
        'src',
        `${
          linkObject.type === EMBEDED_TYPE.PDF
            ? `https://docs.google.com/gview?url=${linkObject.link}&embedded=true`
            : config.vimeoURL + linkObject.link
        }`
      );
    });
    myInterval = setInterval(() => {
      console.log('myFrame myInterval');
      $(document).ready(function() {
        $('#myFrame').attr(
          'src',
          `${
            linkObject.type === EMBEDED_TYPE.PDF
              ? `https://docs.google.com/gview?url=${linkObject.link}&embedded=true`
              : config.vimeoURL + linkObject.link
          }`
        );
      });
    }, 3000);
  }, [linkObject.link]);

  return (
    <div className="iframe-wrapper">
      <div className="iframe-container">
        <div
          className={
            linkObject.type === 'pdf' ? 'iframe-hider' : 'display-none'
          }
        >
          <div className="vertically-align">M.O.K</div>
        </div>
        {loading && <div className="iframe-loading">Loading&#8230;</div>}
        <iframe
          onLoad={() => {
            setLoading(false);
            clearInterval(initialInterval);
            clearInterval(myInterval);
            console.log('myFrame onLoad');
          }}
          height="600"
          width="1000"
          id="myFrame"
          allowFullScreen
          className="iframe-element"
        />
      </div>
    </div>
  );
};

export default ShowLinkItem;
