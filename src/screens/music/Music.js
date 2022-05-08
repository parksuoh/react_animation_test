import React from 'react'
import './Music.css';
import ReactSoundcloud from 'react-soundcloud-embedded';
import { GrMusic } from "react-icons/gr";

const Music = ({setToggle}) => {
  return (
    <div
      className='MusicCont' 
      onClick={() => setToggle(false)}>
        <ReactSoundcloud 
            url="https://soundcloud.com/musicpomplamoose/les-champs-elysees?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            width='80%'
        />
        <GrMusic size={50} className="musicIcon" />
        <h4 className='musicText'>
            Les Champs-Élysées
        </h4>
    </div>
  )
}

export default Music