import React from 'react'
import './LoadingSpin.css'

const LoadingSpin = () => {
  return (
    <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default LoadingSpin