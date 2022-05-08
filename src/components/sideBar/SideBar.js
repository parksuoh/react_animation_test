import React from 'react'
import Menu from '../menu/Menu';
import  './SideBar.css'

const SideBar = ({navigate, toggle, setToggle}) => {
    const menuOptions = [
      {title: '소개', navi: '/',},
      {title: '명언', navi: '/goodsays',},
      {title: '차트', navi: '/chart',},
      {title: '음악', navi: '/music',},
      {title: '방명록', navi: '/board',},
    ]

    const menuClick = (navi) => {
        navigate(navi)
        setToggle(false);
    }

  return (
    <div className={toggle ? 'sidebarCont' : 'sidebarContM'}>
        <div className='Logo' onClick={() => navigate('/')}>
            <h1 className='logoTitle'>GetOver</h1>
        </div>
        <div className='menus'>
          {
            menuOptions.map((item, index) => 
            <div 
              key={index} 
              onClick={() => menuClick(item.navi)}
            >
              <Menu 
                menuTitle={item.title}
              /> 
            </div>

              )
          }
        </div>
    </div>
  )
}

export default SideBar