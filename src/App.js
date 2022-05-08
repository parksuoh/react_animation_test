import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './screens/home/Home';
import GoodSays from './screens/goodsays/GoodSays';
import ChartScr from './screens/chart/ChartScr';
import Music from './screens/music/Music';
import Board from './screens/board/Board';
import SideBar from './components/sideBar/SideBar';
import { useState } from 'react';
import {  GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';



function App() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);


  return (
    <div className="App">
      <SideBar navigate={navigate} toggle={toggle}  setToggle={setToggle}/>
      <div className="AppCont">
        {toggle 
        ?
        <AiOutlineClose color='white'  size={30} className='menuIcon' onClick={() => setToggle(false)}/> 
        : <GiHamburgerMenu  size={30} className='menuIcon' onClick={() => setToggle(true)} /> }
        <Routes>
              <Route path="/" element={<Home setToggle={setToggle} />}>
              </Route> 
              <Route path="/goodsays" element={<GoodSays setToggle={setToggle} />}>
              </Route> 
              <Route path="/chart" element={<ChartScr setToggle={setToggle} />}>
              </Route> 
              <Route path="/music" element={<Music setToggle={setToggle} />}>
              </Route> 
              <Route path="/board" element={<Board setToggle={setToggle} />}>
              </Route> 
          </Routes> 
      </div>
    </div>
  );
}

export default App;
