import React from 'react';
import PropTypes from 'prop-types';
import './HeaderWithImg.css';

const HeaderWithImg = ({title, color, bgColor}) => {
  return (
    <div
      className="HeaderWithImg"
      style={{
        backgroundColor: bgColor,
        color: color,
      }}>
      <h1 className="HeaderWithImg__title">{title}</h1>
    </div>
  );
};

HeaderWithImg.propTypes = {};

HeaderWithImg.defaultProps = {
  color: '#ffffff',
  title: 'classic UI kit',
  bgColor: '#080808',
};

export default HeaderWithImg;
