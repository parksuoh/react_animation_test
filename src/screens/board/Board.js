import React, { useEffect, useRef, useState } from 'react'
import BoardItem from '../../components/boardItem/BoardItem';
import './Board.css';
import { AiOutlineClose } from 'react-icons/ai';

const Board = () => {
  const [text, setText] = useState('');
  const [boardList, setBoardList] = useState(['화이팅 하세요!', '꾸준히 열심히 해봐요!']);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); 
  } , [])


  const onChangeInput = (e) => { 
     setText(e.target.value); 
  };

  const onClickAddButton = () => { 
    setBoardList([...boardList, text])
      setText(''); 
      inputRef.current.focus(); 
  }
  
  const removeItem = (index) => {
    let items = [...boardList];
    items.splice(index, 1);
    setBoardList(items);
  }

  return (
    <div className='BoardCont'>
      <div className='inputBx'>
        <input 
          type="text" 
          name="boarditem" 
          value={text} 
          ref={inputRef}  
          className="boardInput" 
          placeholder='입력해주세요...'
          onChange={onChangeInput} 
        />
        <button 
          type="submit" 
          className="boardInputBtn" 
          onClick={onClickAddButton}  
         >
           입력
        </button>
      </div>
      <div className="boardItemCont">
        {boardList.map((item, index) => 
        <div 
          key={index}
          className="boardItemBx"
        >
            <BoardItem text={item} /> 
            <AiOutlineClose  onClick={() => removeItem(index)} />
        </div>
         )}
      </div>
    </div>
  )
}

export default Board