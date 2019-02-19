import React from 'react'

const Preloader = () => (
  <div className="center-align padded-40">
  <div className="preloader-wrapper big active">
    <div className="spinner-layer spinner-red">
      <div className="circle-clipper left">
        <div className="circle" />
      </div>
      <div className="gap-patch">
        <div className="circle" />
      </div>
      <div className="circle-clipper right">
        <div className="circle" />
      </div>
    </div>
  </div>
  </div>
)

export default Preloader