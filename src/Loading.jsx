import React from 'react';
import './Loading.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

function Loading() {
  return (
    <div className="loader">
      <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" size="5x" />
      <i className="fas fa-circle-notch fa-spin" />
      <h1>loading</h1>
    </div>
  );
}

export default Loading;
