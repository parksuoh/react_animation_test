import React from 'react'
import './Home.css';

const Home = ({setToggle}) => {
  return (
    <div className='homeCont' onClick={() => setToggle(false)}>
      <img 
        className='homeImage'
        width="100%"
        height='100%'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuIpO7_SyZrN0P2gdeQ_lTr2XyllskyJhehA&usqp=CAU' 
      />
      <h3 className='homecontfir'>더이상 도망치지 않는다!</h3>
      <h3 className='homecontsec'>초심! 극복!</h3>
      <h3 className='homecontthr'>언제나 정면승부!</h3>
    </div>
  )
}

export default Home