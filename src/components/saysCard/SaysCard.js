import React from 'react'
import './SaysCard.css'
import { AiFillAliwangwang } from "react-icons/ai";

const SaysCard = ({text}) => {
  return (
    <div className='SaysCardbx'>
        <AiFillAliwangwang size={50} color={"gray"}  />
        <h4 className='SaysCardText'>{text}</h4>
    </div>
  )
}

export default SaysCard