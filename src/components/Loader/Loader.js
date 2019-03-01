import React from 'react';
import './Loader.css';

const Loader = () => {
  return(
    <div className="d-flex justify-content-center" style={{paddingTop: '10%'}}>
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
  )
}

export default Loader;
